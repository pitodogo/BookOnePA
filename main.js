var casper = require('casper').create(
    {
clientScripts: ["includes/jquery.min.js"]	
    }
);
var date = "10-03-2016";
// 9am-10am -> 0
var my_time = ['4','5'];
//Open Facility Booking page
casper.start("https://one.pa.gov.sg/CRMSPortal/CRMSPortal.portal?_nfpb=true&_st=&_windowLabel=CRMSPortal_1&_urlType=render&_mode=view&wlpCRMSPortal_1_action=RBMFacilityPublicBooking&_pageLabel=CRMSPortal_page_1",function(){});



// Todo: PRobabaly login first 

casper.waitForSelector("form select[name='searchResource']", function() {
    this.fillSelectors('form[name=frmFacilityPublicBooking]', {
	'select[name=searchResource]' : '9',
	'select[name=searchLocation]':'1395137'
    }, true);

});



casper.waitForSelector("form input[name='btnSearch']",function(){
    this.click("form input[name='btnSearch']");

});


casper.waitForSelector("input#searchDate",function(){
    this.fillSelectors('[name=frmFacilityPublicBooking]',{
	'input#searchDate':date
    });

});


casper.waitForSelector("input[name=btnCheckVacancy]",function(){

    var haha = this.evaluate(function(){
    ans = document.querySelectorAll('input[name=btnCheckVacancy]');
	ans[0].click();
    });

});


casper.then(function(){
    // RULE: BOOK WHATEVER WE GOT, EVEN ONLY 1 HR
    this.echo(",,,,,,");
    my_time.forEach(function(i){
	var rlt = casper.evaluate(function(i){
	    answer = []
	ele = $('.main_table input[type=hidden][name=_lstAllRbmBooking\\['+i+'\\]\\.isSelected]');
	});

	if(ele){
	    return true;
//	    ele.siblings()[0].click();
	}

    });
    this.echo("fdasdfadsf");
});

casper.then(function(){this.capture('test.png')});





//	'searchResource': ['9'],
//	'searchLocation': ['1395137']



    // aggregate results for the 'casperjs' search
//    links = this.evaluate(getLinks);
    // now search for 'phantomjs' by filling the form again
//    this.fill('form[action="/search"]', { q: 'phantomjs' }, true);
//    this.click('')
    









casper.run();
