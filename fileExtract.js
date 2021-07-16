'''javascript

function minioExtract(username,filename,path){
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

    
    found = minioClient.bucketExists(username)
    if (found==False):
        return console.log('bucket does not exist')
    else:
        result = minioClient.fGetObject(username, filename,path,function(err) {
          if (err) {
            return console.log(err)
          }
          console.log('success')
        })

        return result
          
}



'''
