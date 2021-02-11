var assert = require('chai').assert;
var extract_test = require('../extract.js')
var match_test = require('../match.js')

var jsdom = require("jsdom/lib/old-api");

var metadata = {"email":"email email","Full Name":"Full Name name","Address Line 1":"Address Line 1 addr1","Address Line 2":"Address Line 2 addr2","City":"City city","Country": "Country country","State/Province/Region":"State/Province/Region state","ZIP/Postal Code":"ZIP/Postal Code zip","Phone Number":"Phone Number phone","ship to title":"ship to title Ecom_ShipTo_Postal_Name_Prefix","ship to first name":"ship to first name Ecom_ShipTo_Postal_Name_First","ship to middle name":"ship to middle name Ecom_ShipTo_Postal_Name_Middle","ship to last name":"ship to last name Ecom_ShipTo_Postal_Name_Last","ship to name suffix":"ship to name suffix Ecom_ShipTo_Postal_Name_Suffix","ship to company name":"ship to company name Ecom_ShipTo_Postal_Company","ship to street line1":"ship to street line1 Ecom_ShipTo_Postal_Street_Line1","ship to street line2":"ship to street line2 Ecom_ShipTo_Postal_Street_Line2","ship to street line3":"ship to street line3 Ecom_ShipTo_Postal_Street_Line3","ship to city":"ship to city Ecom_ShipTo_Postal_City","ship to state/province":"ship to state/province Ecom_ShipTo_Postal_StateProv","ship to zip/postal code":"ship to zip/postal code Ecom_ShipTo_Postal_PostalCode","ship to country":"ship to country Ecom_ShipTo_Postal_CountryCode","ship to phone":"ship to phone Ecom_ShipTo_Telecom_Phone_Number","ship to email":"ship to email Ecom_ShipTo_Online_Email","bill to title":"bill to title Ecom_BillTo_Postal_Name_Prefix","bill to first name":"bill to first name Ecom_BillTo_Postal_Name_First","bill to middle name":"bill to middle name Ecom_BillTo_Postal_Name_Middle","bill to last name":"bill to last name Ecom_BillTo_Postal_Name_Last","bill to name suffix":"bill to name suffix Ecom_BillTo_Postal_Name_Suffix","bill to company name":"bill to company name Ecom_BillTo_Postal_Company","bill to street line1":"bill to street line1 Ecom_BillTo_Postal_Street_Line1","bill to street line2":"bill to street line2 Ecom_BillTo_Postal_Street_Line2","bill to street line3":"bill to street line3 Ecom_BillTo_Postal_Street_Line3","bill to city":"bill to city Ecom_BillTo_Postal_City","bill to state/province":"bill to state/province Ecom_BillTo_Postal_StateProv","bill to zip/postal code":"bill to zip/postal code Ecom_BillTo_Postal_PostalCode","bill to country":"bill to country Ecom_BillTo_Postal_CountryCode","bill to phone":"bill to phone Ecom_BillTo_Telecom_Phone_Number","bill to email":"bill to email Ecom_BillTo_Online_Email","receipt to title":"receipt to title Ecom_ReceiptTo_Postal_Name_Prefix","receipt to first name":"receipt to first name Ecom_ReceiptTo_Postal_Name_First","receipt to middle name":"receipt to middle name Ecom_ReceiptTo_Postal_Name_Middle","receipt to last name":"receipt to last name Ecom_ReceiptTo_Postal_Name_Last","receipt to name suffix":"receipt to name suffix Ecom_ReceiptTo_Postal_Name_Suffix","receipt to company name":"receipt to company name Ecom_ReceiptTo_Postal_Company","receipt to street line1":"receipt to street line1 Ecom_ReceiptTo_Postal_Street_Line1","receipt to street line2":"receipt to street line2 Ecom_ReceiptTo_Postal_Street_Line2","receipt to street line3":"receipt to street line3 Ecom_ReceiptTo_Postal_Street_Line3","receipt to city":"receipt to city Ecom_ReceiptTo_Postal_City","receipt to state/province":"receipt to state/province Ecom_ReceiptTo_Postal_StateProv","receipt to postal code":"receipt to postal code Ecom_ReceiptTo_Postal_PostalCode","receipt to country":"receipt to country Ecom_ReceiptTo_Postal_CountryCode","receipt to phone":"receipt to phone Ecom_ReceiptTo_Telecom_Phone_Number","receipt to email":"receipt to email Ecom_ReceiptTo_Online_Email","name on card":"name on card Ecom_Payment_Card_Name","card type":"card type Ecom_Payment_Card_Type","card number":"card number Ecom_Payment_Card_Number","card verification value":"card verification value Ecom_Payment_Card_Verification","card expire date day":"card expire date day Ecom_Payment_Card_ExpDate_Day","card expire date month":"card expire date month Ecom_Payment_Card_ExpDate_Month","card expire date year":"card expire date year Ecom_Payment_Card_ExpDate_Year","card protocols":"card protocols Ecom_Payment_Card_Protocol","consumer order ID":"consumer order ID Ecom_ConsumerOrderID","user ID":"user ID Ecom_User_ID","user password":"user password Ecom_User_Password","schema version":"schema version Ecom_SchemaVersion","wallet id":"wallet id Ecom_WalletID"};

describe('Task #1 - Metadata', function() {
  describe('#extract', function() {

    var result = null;

    before(function (done) {
      jsdom.env(
        "assets/autofill.mozdev.org.autofilltest.html",
        [],
        function (err, window) {
          result = extract_test.extract(window);
          done();
        }
      );
    });

    it('should return a matching object', function() {
      assert.deepEqual(result, metadata);
    });
  });
});

describe('Task #2 - Regular Expression', function() {
  describe('#match', function() {

    var result = ['card expire date day', 'card expire date month', 'card expire date year']
    var expected = null;

    before(function() {
      expected = match_test.match(metadata);
    });

    it('should match 3 field labels', function() {
      assert.deepEqual(result, expected);
    });
  });
});