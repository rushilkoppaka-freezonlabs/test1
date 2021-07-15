'''javascript

//json is suppose stored in clientlist
//files are stored in doc

function minioStorage(clientlist,doc){
    var Minio = require('minio')

// Instantiate the minio client with the endpoint
// and access keys as shown below.
    var minioClient = new Minio.Client({
        endPoint: 'play.min.io',
        port: 9000,
        useSSL: true,
        accessKey: 'Q3AM3UQ867SPQQA43P2F',
        secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
    });

    for (let i=0;i<=10;i++){
            found = minioClient.bucket_exists( clientlist[i].username)
            if (found==False):
                minioClient.make_bucket(clientlist[i].username)
            else:
                console.log('bucket already exists')
            // here we upload the data in form of btyearray 
            //and the str parameters must in lowercase
            result = minioClient.fPutObject( clientlist[i].username, clientlist[i].filename,
                                       doc[i].file, -1, part_size=10 * 1024 * 1024)
            console.log('File uploaded successfully.')
}



'''
