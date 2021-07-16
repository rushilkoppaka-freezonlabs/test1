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
'''python


from minio import Minio
from minio.error import S3Error
import io

def listToString(s):
    str1 = ""
    for ele in s:
        str1 += ele
    return str1

def Extract(inbox, doc,path):
    client = Minio(
        "play.min.io",
        access_key="Q3AM3UQ867SPQQA43P2F",
        secret_key="zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG",
    )

    for i in range(len(inbox)):
        found = client.bucket_exists(inbox["username"][i].lower())
        if not found:
            print('doesnt exist')
        else:
            result = client.fget_object(inbox["username"][i].lower(), listToString(inbox['file name'][i]).lower(),path)
            return result

