const aws = require("aws-sdk");
const dynamodb = new aws.DynamoDB.DocumentClient();
const moment = require("moment");
const uuid = require("uuid");

const tableName = process.env.TABLE_NAME;
module.exports.create = async (event) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
  try {
    const { title, content } = JSON.parse(event.body);

    let item = {};
    item.contentId = uuid.v4();
    item.updatedAt = moment().unix();
    item.content = [
      {
        title,
        content,
        createdAt: moment().unix(),
      },
    ];

    let res = await dynamodb
      .put({
        TableName: tableName,
        Item: item,
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    console.log(event);
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};
