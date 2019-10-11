'use strict';

function printReceipt(tags){
	var test = tags.map(barcode => ({barcode}));
	console.log(test);
	// return ;
}


function decodeTags(tags){
	decodeBarcodes(tags);
}

function decodeBarcodes(){
	var decodedBarcodes;
	return decodedBarcodes;
}

//https://playcode.io/
   /* const tags = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2.5',
      'ITEM000005',
      'ITEM000005-2',
    ];

    	var items = tags.map(barcode => ({barcode}).barcode.split('-'));
	console.log(items);*/