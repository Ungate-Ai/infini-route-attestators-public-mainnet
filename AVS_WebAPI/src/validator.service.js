require('dotenv').config();
const dalService = require("./dal.service");
const oracleService = require("./oracle.service");

async function validate(proofOfTask) {
  try {
    const taskResult = await dalService.getIPfsTask(proofOfTask);

    // Parse the JSON string in taskResult.data
    const taskData = JSON.parse(taskResult.data);

    // Initialize isApproved as false
    let isApproved = false;

    // Implement validation logic based on taskData
    if (taskData) {
      const {
        time,
        cost_setting,
        accuracy_setting,
        selected_model,
        ttft,
        token,
        cost,
        wallet,
        session_hash,
        prompt_hash
      } = taskData;

      if (
        time != null &&
        cost_setting >= 0 &&
        accuracy_setting >= 0 &&
        selected_model != null && // Check if selected_model exists and is not null
        token > 0 &&
        ttft >= 0 &&
        cost >= 0 &&
        wallet != null &&
        session_hash != null &&
        prompt_hash != null
      ) {
        isApproved = true;
      }
    }

    return isApproved;
  } catch (err) {
    console.error(err?.message);
    return false;
  }
}

module.exports = {
  validate,
};
