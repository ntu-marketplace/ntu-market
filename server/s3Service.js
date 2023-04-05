
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const uuid = require('uuid').v4;

exports.s3Uploadv3 = async (file) => {
    const s3client = new S3Client();
    const key = `marketdb_${uuid()}`

    const param = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
        Body: file.buffer
    }
    
    s3client.send(new PutObjectCommand(param));
    const link = `https://marketdb.s3.ap-southeast-1.amazonaws.com/${key}`
    return link;
}