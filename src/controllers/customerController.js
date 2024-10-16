const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrayCustomerService,
  getCustomerService,
  updateCustomerService,
  deleteACustomerService,
} = require("../services/customerService");

module.exports = {
  postCreateCustomerAPI: async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    let imageUrl = "";

    if (!req.files || Object.keys(req.files).length === 0) {
      //do nothing
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageUrl = result.path;
    }
    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageUrl,
    };

    let customer = await createCustomerService(customerData);

    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },
  postCreateArrayCustomerAPI: async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        EC: -1,
        data: customers,
      });
    }
  },
  getCustomerAPI: async (req, res) => {
    let { limit, page } = req.query;
    let result = null;
    if (limit && page) {
      result = await getCustomerService(limit, page);
    } else {
      result = await getCustomerService();
    }

    if (result) {
      return res.status(200).json({
        EC: 0,
        data: result,
      });
    } else {
      return res.status(200).json({
        EC: -1,
        data: result,
      });
    }
  },
  putCustomerAPI: async (req, res) => {
    let { id, name, email, address } = req.body;
    let result = await updateCustomerService(id, name, email, address);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  deleteACustomerAPI: async (req, res) => {
    let id = req.body.id;
    let result = await deleteACustomerService(id);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
