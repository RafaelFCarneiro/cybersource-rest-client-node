/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PtsV1TransactionBatchesGet200ResponseLinksSelf'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV1TransactionBatchesGet200ResponseLinksSelf'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV1TransactionBatchesGet200ResponseLinks = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV1TransactionBatchesGet200ResponseLinksSelf);
  }
}(this, function(ApiClient, PtsV1TransactionBatchesGet200ResponseLinksSelf) {
  'use strict';




  /**
   * The PtsV1TransactionBatchesGet200ResponseLinks model module.
   * @module model/PtsV1TransactionBatchesGet200ResponseLinks
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV1TransactionBatchesGet200ResponseLinks</code>.
   * @alias module:model/PtsV1TransactionBatchesGet200ResponseLinks
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PtsV1TransactionBatchesGet200ResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV1TransactionBatchesGet200ResponseLinks} obj Optional instance to populate.
   * @return {module:model/PtsV1TransactionBatchesGet200ResponseLinks} The populated <code>PtsV1TransactionBatchesGet200ResponseLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = PtsV1TransactionBatchesGet200ResponseLinksSelf.constructFromObject(data['self']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV1TransactionBatchesGet200ResponseLinksSelf} self
   */
  exports.prototype['self'] = undefined;



  return exports;
}));

