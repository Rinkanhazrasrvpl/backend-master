const mongoose = require('mongoose');
const permissionSchema = new mongoose.Schema({
 name : {
    type : String,

 },
  viewDashboard : {
    type: Boolean,
  },
  viewCategory : {
    type :Boolean
  },
  createCategory : {
    type :Boolean
  },
  editCategory : {
    type :Boolean
  },
  deleteCategory : {
    type :Boolean
  },
  viewSubCategory : {
    type :Boolean
  },
  createSubCategory : {
    type :Boolean
  },
  editSubCategory : {
    type :Boolean
  },
  deleteSubCategory : {
    type :Boolean
  },
  viewBrand : {
    type :Boolean
  },
  createBrand : {
    type :Boolean
  },
  editBrand : {
    type :Boolean
  },
  deleteBrand : {
    type :Boolean
  },
  viewAttribute : {
    type :Boolean
  },
  createAttribute : {
    type :Boolean
  },
  editAttribute : {
    type :Boolean
  },
  deleteAttribute : {
    type :Boolean
  },
  viewTaxRule : {
    type :Boolean
  },
  createTaxRule : {
    type :Boolean
  },
  editTaxRule : {
    type :Boolean
  },
  deleteTaxRule : {
    type :Boolean
  },
  viewShipingRule : {
    type :Boolean
  },
  createShipingRule : {
    type :Boolean
  },
  editShipingRule : {
    type :Boolean
  },
  deleteShipingRule : {
    type :Boolean
  },
  viewProductCollection : {
    type :Boolean
  },
  createProductCollection : {
    type :Boolean
  },
  editProductCollection : {
    type :Boolean
  },
  deleteProductCollection : {
    type :Boolean
  },
  viewBundleDeal : {
    type :Boolean
  },
  createBundleDeal : {
    type :Boolean
  },
  editBundleDeal : {
    type :Boolean
  },
  deleteBundleDeal : {
    type :Boolean
  },
  viewVoucher : {
    type :Boolean
  },
  createVoucher : {
    type :Boolean
  },
  editVoucher : {
    type :Boolean
  },
  deleteVoucher : {
    type :Boolean
  },
  viewProduct : {
    type :Boolean
  },
  createProduct : {
    type :Boolean
  },
  editProduct : {
    type :Boolean
  },
  deleteProduct : {
    type :Boolean
  },
  viewFlashSale : {
    type :Boolean
  },
  createFlashSale : {
    type :Boolean
  },
  editFlashSale : {
    type :Boolean
  },
  deleteFlashSale : {
    type :Boolean
  },
  viewOrder : {
    type :Boolean
  },
  editOrder : {
    type :Boolean
  },
  deleteOrder : {
    type :Boolean
  },
  viewRatingReview : {
    type :Boolean
  },
  deleteRatingReview : {
    type :Boolean
  },
  viewUser : {
    type :Boolean
  },
  createUser : {
    type :Boolean
  },
  editUser : {
    type :Boolean
  },
  deleteUser : {
    type :Boolean
  },
  viewSubscriber : {
    type :Boolean
  },
  deleteSubscriber : {
    type :Boolean
  },
  viewSubEmailFormate : {
    type :Boolean
  },
  createSubEmailFormate : {
    type :Boolean
  },
  editSubEmailFormate : {
    type :Boolean
  },
  deleteSubEmailFormate : {
    type :Boolean
  },
  viewRole : {
    type :Boolean
  },
  createRole : {
    type :Boolean
  },
  editRole : {
    type :Boolean
  },
  deleteRole : {
    type :Boolean
  },
  viewAdmin: {
    type :Boolean
  },
  createAdmin : {
    type :Boolean
  },
  editAdmin : {
    type :Boolean
  },
  deleteAdmin : {
    type :Boolean
  },
  viewPage: {
    type :Boolean
  },
  createPage : {
    type :Boolean
  },
  editPage : {
    type :Boolean
  },
  deletePage : {
    type :Boolean
  },
  viewHomeSlider: {
    type :Boolean
  },
  createHomeSlider : {
    type :Boolean
  },
  editHomeSlider : {
    type :Boolean
  },
  deleteHomeSlider : {
    type :Boolean
  },
  viewBanner: {
    type :Boolean
  },
  createBanner : {
    type :Boolean
  },
  editBanner : {
    type :Boolean
  },
  deleteBanner : {
    type :Boolean
  },
  viewSiteSetting: {
    type :Boolean
  },
  editSiteSetting : {
    type :Boolean
  },
  viewFooterLink: {
    type :Boolean
  },
  createFooterLink : {
    type :Boolean
  },
  editFooterLink : {
    type :Boolean
  },
  deleteFooterLink : {
    type :Boolean
  },
  viewSetting: {
    type :Boolean
  },
  editSetting : {
    type :Boolean
  },
  viewProfile: {
    type :Boolean
  },
  editProfile : {
    type :Boolean
  },
  viewManage: {
    type :Boolean
  },
  deleteManage : {
    type :Boolean
  },
  viewWithdrawalAmount: {
    type :Boolean
  },
  createWithdrawalAmount : {
    type :Boolean
  },
  editWithdrawalAmount : {
    type :Boolean
  },
  deleteWithdrawalAmount : {
    type :Boolean
  },
  viewStore: {
    type :Boolean
  },
  createStore : {
    type :Boolean
  },
  editStore : {
    type :Boolean
  },
  deleteStore : {
    type :Boolean
  },
  viewWithdrawalRequest: {
    type :Boolean
  },
  createWithdrawalRequest : {
    type :Boolean
  },
  approveWithdrawalRequest : {
    type :Boolean
  },
  cancelWithdrawalRequest : {
    type :Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now
  },

  
});


module.exports = mongoose.model('user_permission', permissionSchema);
