const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.scan = async (event) => {
  try {
    const data = await dynamodb
      .scan({
        TableName: process.env.TABLE_NAME,
      })
      .promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
