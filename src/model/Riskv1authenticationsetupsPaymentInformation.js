/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Ptsv2paymentsPaymentInformationCustomer', 'model/Riskv1authenticationexemptionsPaymentInformationFluidData', 'model/Riskv1authenticationsetupsPaymentInformationCard', 'model/Riskv1authenticationsetupsPaymentInformationTokenizedCard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsPaymentInformationCustomer'), require('./Riskv1authenticationexemptionsPaymentInformationFluidData'), require('./Riskv1authenticationsetupsPaymentInformationCard'), require('./Riskv1authenticationsetupsPaymentInformationTokenizedCard'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1authenticationsetupsPaymentInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsPaymentInformationCustomer, root.CyberSource.Riskv1authenticationexemptionsPaymentInformationFluidData, root.CyberSource.Riskv1authenticationsetupsPaymentInformationCard, root.CyberSource.Riskv1authenticationsetupsPaymentInformationTokenizedCard);
  }
}(this, function(ApiClient, Ptsv2paymentsPaymentInformationCustomer, Riskv1authenticationexemptionsPaymentInformationFluidData, Riskv1authenticationsetupsPaymentInformationCard, Riskv1authenticationsetupsPaymentInformationTokenizedCard) {
  'use strict';




  /**
   * The Riskv1authenticationsetupsPaymentInformation model module.
   * @module model/Riskv1authenticationsetupsPaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationsetupsPaymentInformation</code>.
   * @alias module:model/Riskv1authenticationsetupsPaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Riskv1authenticationsetupsPaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationsetupsPaymentInformation} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationsetupsPaymentInformation} The populated <code>Riskv1authenticationsetupsPaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('card')) {
        obj['card'] = Riskv1authenticationsetupsPaymentInformationCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('tokenizedCard')) {
        obj['tokenizedCard'] = Riskv1authenticationsetupsPaymentInformationTokenizedCard.constructFromObject(data['tokenizedCard']);
      }
      if (data.hasOwnProperty('fluidData')) {
        obj['fluidData'] = Riskv1authenticationexemptionsPaymentInformationFluidData.constructFromObject(data['fluidData']);
      }
      if (data.hasOwnProperty('customer')) {
        obj['customer'] = Ptsv2paymentsPaymentInformationCustomer.constructFromObject(data['customer']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Riskv1authenticationsetupsPaymentInformationCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationsetupsPaymentInformationTokenizedCard} tokenizedCard
   */
  exports.prototype['tokenizedCard'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationexemptionsPaymentInformationFluidData} fluidData
   */
  exports.prototype['fluidData'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationCustomer} customer
   */
  exports.prototype['customer'] = undefined;



  return exports;
}));

