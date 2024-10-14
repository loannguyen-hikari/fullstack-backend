const path = require("path");
const { base } = require("../models/user");

const uploadSingleFile = async (fileObject) => {
  let uploadPath = path.resolve(__dirname, "../public/images/upload/");

  //get image extension
  let extName = path.extname(fileObject.name);

  // get image's name without extension
  let baseName = path.basename(fileObject.name, extName);

  //create final path
  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;

  try {
    await fileObject.mv(finalPath);
    return {
      status: "success",
      path: finalName,
      error: null,
    };
  } catch (err) {
    console.log("check error", err);
    return {
      status: "failed",
      path: finalName,
      error: JSON.stringify(err),
    };
  }
};
module.exports = {
  uploadSingleFile,
};
