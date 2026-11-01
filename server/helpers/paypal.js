const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "BAArpWSIsKrhCOEv6rNPRldVLgwg0eJ2xBlGoGqdSGXeaf_VKsRMHNS3Ht-7UylqFPJALXv8M4vCrXhV_c",
  client_secret: "EDgP1uxAsZhrQM4dNd2UA8uOUzEg5dzIz4IZvtdsPMvsxUp_1hI-0My0X-D80rSXszGUUTejxhusVB-4",
});

module.exports = paypal;