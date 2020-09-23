'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'frontpage',
     'wifi' ,
     'new',
     'screen',
     'production',
     'availability',
  'login',
  'compare',
  'registrations',
  'dashboard',
  'dashboardnew',
  'alarms',
  'client',
  'oee',
  'part',
  'machine_reg',
  'Maintanances',
  'ngPercentDisplay',
  'machines',
  'report',
  'export',
  'role',
  'jobpage',
  'job',
  'moment-picker',
  'shift',
  'breaktime',
  'operator',
  'operation',
  'hmi',
  'comp',
  'chart',
  'lmw',
  'faq_question',
  'machine_allocation',
  'operator_master',
  'operator_allocation_master',
  'rolesetting',
  'user',
  'alldetails',
  'alert',
  'notification',
  'adminuser',
  'device',
  'cyclestop',
  'pascalprecht.translate', 
  'setting',
  'tenant',
  'device_registration',
  'changepassword',
  'statuschart',
  'cyclestart',
  'shiftpart',
  'machinenew',
  'myApp.version',
  'codecompare',
  'alternative',
  'myApp.download',
  'myApp.reason'
]).
config(['$locationProvider', '$routeProvider','$translateProvider','$httpProvider', function ($locationProvider, $routeProvider,$translateProvider,$httpProvider) {
  $httpProvider.interceptors.push('APIInterceptor');
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({
      redirectTo: '/login'
    });

    var en_translations = {
      "login":"Login",
      "username":"User Name",
      "password":"Password",
      "signup":"Signup",
      "forgotpassword":"Forgot Password",
      "haveaccount":"Do not have an account",
      "signintocontinue":"Signin to continue with Yantra24x7",
      "dashboard":"Dashboard",
      "alarm":"Alarm",
      "alert":"Alert",
      "alarmreport":"Alarm Reports",
      "log":"Log",
      "report":"Report",
      "notificationsetting":"Notification Setting",
      "maintenance":"Maintenance",
      "master":"Master",
      "operatorentry":"Operator Entry",
      "machine":"Machine",
      "machines":"Machines",
      "shift":"Shift",
      "client":"Client",
      "job":"Job",
      "user":"User",
      "operator":"Operator",
      "operatorallocation":"Operator Allocation",
      "feature":"Feature",
      "home":"Home",
      "export":"Export",
      "overallmachinesstatus":"Overall Machines Status",
      "running":"Running",
      "idle":"Idle",
      "stop":"Stop",
      "nodata":"No data",
      "today":"Today",
      "shifttime":"Shift Time",
      "starttime":"Start Time",
      "lastupdate":"Last Update",
      "utilization":"Utilization",
      "partsproduced":"Parts Produced",
      "cycletime":"Cycle Time",
      "runtime":"Run Time",
      "downtime":"Down time",
      "stoptime":"Stop Time",
      "nos":"nos",
      "notavaliable":"Not Available",
      "currentshiftdetails":"Current Shifts Details",
      "operatorname":"Operator Name",
      "operatorid":"Operator ID",
      "machineid":"Machine ID",
      "machinename":"Machine Name",
      "description":"Description",
      "search":"Search",
      "page":"Page",
      "overallalarm" : "Overall Alarm",
      "alarmtype":"Alarm Type",
      "date":"Date",
      "time":"Time",
      "duration":"Duration",
      "overallalarmhistory":"Overall Alarm History",
      "alarmstatus":"Alarm Status",
      "axisnumber":"Axis Number",
      "page":"Page",
      "export":"Export",
      "search":"Search",
      "overallalertreport":"Overall Alert Report",
      "message":"Message",
      "of":"Of",
      "alarmreport":"Alarm Report",
      "selectmachine":"Select Machine",
      "selecttype" : "Select Type",
      "fromdate":"From Date",
      "todate":"To Date",
      "all":"All",
      "viewreport":"View Report",
      "selectoperator":"Select Operator",
      "operator":"Operator",
      "machinename":"Machine Name",
      "shifttime":"Shift Time",
      "shift":"Shift",
      "operatorname":"Operator Name",
      "alarmtime":"Alarm Time",
      "alarmmessage":"Alarm Message",
      "selectshift":"Select Shift",
      "alarmnumber":"Alarm Number",
      "report":"Report",
      "split":"Split",
      "jobdescription":"Job Description",
      "programnumber":"Program Number",
      "loadingandunloadingtime":"Loading And Unloading Time",
      "ldletime":"Idle Time",
      "totaldowntime":"Total Down Time",
      "actualrunning":"Actual Running",
      "actualworkinghours":"Actual Working Hours",
      "notificationsettings":"Notification Settings",
      "timeinervel":"Time Intervel",
      "reason":"Reason",
      "enable/disablenotification":"Enable/Disable Notification",
      "select":"Select",
      "machineregistration":"Machine Registration",
      "controllermodelnumber":"Controller Model Number",
      "machinetype":"Machine Type",
      "machineserialnumber":"Machine Serial Number",
      "unit":"Unit",
      "unit1":"Unit1",
      "unit2":"Unit2",
      "unit3":"Unit3",
      "unit4":"Unit4",
      "unit5":"Unit5",
      "selectunit":"Select Unit",
      "save":"Save",
      "cancel":"Cancel",
      "close":"Close",
      "model":"Model",
      "serialnumber":"Serial Number",
      "controller":"Controller",
      "ip":"Ip",
      "idletime":"Idle Time",
      "internetstatus":"Internet Status",
      "ethernetstatus":"Ethernet Status",
      "status":"Status",
      "shiftregistration":"Shift Registration",
      "daystarttime":"Day start time",
      "numberofshift":"Number Of Shift",
      "shifttransactionregistration":"Shift Transaction Registration",
      "workingtime":"Working Time",
      "shiftstarttime":"Shift Start Time",
      "shiftendtime":"Shift End Time",
      "action":"Action",
      "shiftnumber":"Shift Number",
      "endtime":"End Time",
      "number":"Number",
      "registrationcompleted":"Registration Completed",
      "clientregistration":"Client Registration",
      "clientname":"Client Name",
      "emailid":"Email Id",
      "mobilenumber":"mobile Number",
      "required":"Required",
      "name":"Name",
      "operatorregistration":"Operator Registration",
      "operatorname":"Operator Name",
      "others":"Others",
      "operatorallocation":"Operator Allocation",
      "created":"Created",
      "from-todate":"From-To Date",
      "userregistration":"User Registration",
      "role":"Role",
      "firstname":"First Name",
      "lastname":"Last Name",
      "newuserregistration":"New User Registration",
      "selectrole":"Select Role",
      "userrole":"User Role",
      "remarks":"Remarks",
      "edituserregistration":"Edit User Registration",
      "notvalidemailid":"Not Valid Email Id",
      "lastupdatedtime":"Last Update Time",
      "downtimedetails":"Down Time Details",
      "possibleload&unloadtime":"Possible Load & Unload Time",
      "total":"Total",
      "jobid":"Job Id",
      "partscount":"Parts Count",
      "rejects":"Rejects",
      "rework":"Rework",
      "inspection":"Inspection",
      "remainingparts":"Remaining Parts",
      "partsdelivered":"Parts Delivered",
      "stopping":"Stopping",
      "remaining":"Remaining",
      "graphicalrepresentation":"Graphical Representation",
      "selectmachinename":"Select Machine Name",
      "selectdate":"Select Date",
      "parts":"Parts",
      "jobregistration":"Job Registration",
      "partname":"Part Name",
      "partnumber":"Part Number",
      "orderquantity":"Order Quantity",
      "jobstartdate":"Job Start Date",
      "jobenddate":"Job End Date",
      "quantity":"Quantity",
      "startdate":"Start Date",
      "enddate":"End Date",
      "note:pleaseregisteroperationsundertheactionstabforeachjob":
      "Note: Please register operations under the actions tab for each job",
      "companyname":"Company Name",
      "addressline1":"Address Line1",
      "addressline2":"Address Line2",
      "city":"City",
      "State":"State",
      "country":"Country",
      "pincode":"Pincode",
      "agreethetermsandpolicy":"Agree the terms and policy",
      "alreadyhaveanaccount":"Already have an account",
      "register":"Register",
      "registertocontinuewith":"Register to continue with Yantra24x7",
      "aboutcompany":"About Company",
      "copyright":"Copyright",
      "machineip":"Machine ip",
      "allrightsreserved":"All Rights Reserved",
      "privacypolicy":"Privacy Policy",
      "terms&conditions":"Terms & Conditions",
      "edituserprofile":"Edit User Profile",
      "recentalarms":"Recent Alarms",
      "details":"Details",
      "deviceip":"Device ip",
      "partscountdetails":"Parts Count Details", 
      "datacollection":"DATA COLLECTION",
      "question1":"What Mode of data retrieval from CNC Machines",
      "answer1":"Data retrieval from Ethernet and Rs232 ( Serial Port ) mode",
      "question2":"How many Hardware Device required for Retrieval of data from the CNC Machine",
      "answer2":"One, Hardware device can connect upto 10 CNC Machines for Ethernet Mode",
      "question3":"Is Internet access required on the computers where the Data Entry screens are used",
      "answer3":"Yes! Internet access is required for the installation of the application",
      "question4":"Are the CNC machines connected directly to the Internet",
      "answer4":"No! The Hardware device along with switch, access to the machines, the machines never need direct access to the Internet",
      "question5":"What if I have older machines – Serial Port",
      "answer5":"No problem. Yantra 24x7 offers a low cost hardware device that’s easy to connect to each machines to collect data",
      "question6":"Is there a way to enter downtime reasons",
      "answer6":" Yes! Yantra 24x7 includes an easy to use data entry screen on PC's and tablets for entering user defined downtime reasons",
      "licensing":"LICENSING",
      "question7":"Can I move the licenses from one piece of CNC Machine to another",
      "answer7":"Yes! You are free to move the licenses from machine to machine based on IP cofiguration",
      "question8":"Can I move licenses from one plant to another",
      "answer8":"Yes!  As long as the plants are within the same account then the licenses can be moved to any piece of equipment",
      "question9":"Can licensing be increased or decreased easily",
      "reporting":"REPORTING",
      "question10":"How many people can run reports at a time",
      "question11":"Can I access the reports from outside of my facility",
      "answer11":" Yes! Reports can be run from anywhere, as long as you have Internet access",
      "question12":"Can the status of the CNC Machine be viewed from a phone",
      "answer12":"Yes! Mobile apps for phones and tablets are available for both Apple iOS and Google Android",
      "question13":"Can the status of the CNC Machine be viewed from a PC", 
      "answer13":"Yes! of course the data can be monitored from PC too",
      "question14":"What are all the Reports can I view",
      "answer14":"You can view shiftwise, Operator wise , Hour wise, Program Number wise reports",
      "question15":"Can I view Machine Utilization datewise",
      "answer15":"Yes!  Datewise and Monthwise Machine Utilization can be viewed",
      "question16":"Can I Monitor Cycle Time and Parts Count",
      "answer16":"Yes! You can Monitor Cycle Time and Parts Count along with machine status",
      "securityandprivacy":"SECURITY AND PRIVACY",
      "question17":"Is my data secure",
      "answer17":"Yes! All data is transmitted to Cloud and secured",
      "question18":"Will you sell or give away any of my personnel information",
      "answer18":"No! Never, not under any circumstance",
      "mydata":"MY DATA",
      "question19":"Can I get a copy of the data",
      "support":"SUPPORT",
      "question20":"Do you charge for remote application support",
      "answer20":"No! Application support by email, telephone and the web support are all included for existing connected equipment. On-site rates do apply for any on-site time if that is requested or required",
      "question21":"If I need help such as troubleshooting networking issues",
      "doyouwanttodelete":"DO you want to delete",
      "theusernameorpasswordisincorrect":"the username or password is incorrect",
      "pleaseentercorrectemailorphonenumber":"Please enter Correct Email or phone Number",
      "checkyouremailandresetyourpassword":"Check Your Email and Reset Your Password",
      "pleaseselectoperator":"Please Select Operator",
      "pleaseselectmachine":"Please Select Machine",
      "breaktimedetails":"Break Time Details",
      "breakstarttime":"Break Start Time",
      "breakendtime":"Break End Time",
      "breaktimeregistration":"Break Time Registration",
      "areyousurewanttologout":"Are You Sure Want to Logout?",
      "thankyouforregistering":"Thank you for registering with Yantra24X7",
      "required":"Required",
      "notvaliedemailid":"Not valid email",
      "onlynumbersallowedmaximum10numbers":"Only Numbers Allowed, Maximum 10 Numbers",
      "send":"Send",
      "date":"Date",
      "servoload":"Servo Load",
      "servotemp":"Servo Motor Temperature",
      "pulsecodetemperature":"Pulse Coder Temperature",
      "machinestatus":"Machine Status",
      "jobname":"Job Name",
      "currentstatus": "Current Status",
      "lastcycle":"Last Cycle",
      "run":"Run",
      "partsproduct":"Parts Produced",
      "cycletime":"Cycle Time",
      "cyclestartchart":"Cycle Start Chart",
      "charts":"Charts",
      'allshiftchart':"All Shift Chart",
      "setting":"Setting",
      "demo":"DEMO",
      "lastcuttingtime":"Last Cutting Time",
      "powerstatus":"Power Status",
      "overallalarmhistory":"Overall Alarm History",
      "datetime":"Date Time",
      "cyclestarttostart":"Cycle Start To Start",
      "yesterday":"Yesterday",
      "thisweek":"This Week",
      "lastweek":"Last Week",
      "thismonth":"This Month",
      "lastmonth":"Last Month",
      "machineutilized":"Machine Utilized",
      "shiftutilized":"Shift Utilized",
      "target":"Target",
      "actual":"Actual",
      "excess":"Excess",
      "nonutilized":"Non utilized",
      "shortfall":"Shortfall",
      "nos":"Nos",
      "branch":"Branch",
      "target":"Target",
      "spindle":"Spindle",
      "hmi":"HMI",
      "cyclestopchart":"Cycle Stop Chart",
      "oee":"OEE",



      "registrationcompleted":"Registration completed",
      "registrationfailed":"Registration Failed",
      "updatedsuccessfully":"Updated Successfully",
      "updationfailed":"Updation Failed",
      "deletedsuccessfully":"delete successfully",
      "deletefailed":"delete failed",
      "spindlespeed":"Spinde Speed",








      

    }
    
    var ta_translations = {
     "login":"உள் நுழை",
     "username":"பயனர் பெயர்",
     "password":"கடவுச்சொல்",
     "signup":"இணைவதற்கு ",
     "forgotpassword":"கடவுச்சொல்லை மறந்துவிட்டீர்களா",
     "haveaccount":"கணக்கு வைத்திருக்கவில்லையா",
     "signintocontinue":"Yantra24x7 உடன் தொடர்ந்து உள்நுழைவதற்கு",
      "dashboard":"அறை",
      "alarms":"அலாரங்கள்",
      "alert":"எச்சரிக்கைகள்",
      "alarmreport":"எச்சரிக்கை அறிக்கை",
      "log":"பதிவு",
      "report":"அறிக்கை",
      "notificationsetting":"அறிவிப்பு அமைத்தல்",
      "maintenance":"பராமரிப்பு",
      "master":"முதுநிலை",
      "operatorentry":"நுழைவு",
      "machine":"இயந்திரம்",
      "machines":"இயந்திரங்கள்",
      "shift":"மாற்றுதல்",
      "client":"வாடிக்கையாளர்",
      "job":"வேலை",
      "user":"பயனர்",
      "pulsecodetemperature":"துடிப்பு குறியீடு வெப்பநிலை",
      "operator":"இயக்குபவர்",
      "operatorallocation":"இயக்குபவர்கள் ஒதுக்கீடு",
      "feature":"Feature",
      "home":"வீடு",
      "export":"ஏற்றுமதி",
      "overallmachinesstatus":"ஒட்டுமொத்த இயந்திரங்கள் நிலை",
      "running":"இயங்கும்",
      "idle":"செயலற்ற",
      "stop":"நிறுத்தம்",
      "nodata":"தகவல் இல்லை",
      "today":"இன்று",
      "shifttime":"வேலை நேரம்",
      "starttime":"ஆரம்பிக்கும் நேரம்",
      "lastupdate":"கடைசியாக புதுப்பிக்கப்பட்டது",
      "utilization":"பயன்பாடு",
      "partsproduced":"உற்பத்தி செய்யப்பட்டது",
      "cycletime":"சுழற்சி நேரம்",
      "runtime":"இயக்கம்",
      "downtime":"செயல்படாத நேரம்",
      "stoptime":"நேரம் நிறுத்தவும்",
      "nos":"nos",
      "notavaliable":"கிடைக்கவில்லை",
      "currentshiftdetails":"தற்போதைய வேலை விவரங்கள",
      "operatorname":"இயக்குபவர் பெயர்",
      "operatorid":"இயக்குபவர் ஐடி",
      "machineid":"இயந்திரத்தின் ஐடி",
      "machineip":"இயந்திரத்தின் ஐபி",
      "deviceip":"சாதனம் ஐபி",
      "machinename":"இயந்திரம் பெயர்",
      "description":"விளக்கம்",
      "search":"தேடல்",
      "page":"பக்கம்",
      "overallalarm":"ஒட்டுமொத்த எச்சரிக்கை",
      "alarmtype":"எச்சரிக்கை வகை",
      "date":"தேதி",
      "time":"நேரம்",
      "duration":"காலம்",
      "overallalarmhistory":"ஒட்டுமொத்த எச்சரிக்கை வரலாறு",
      "alarmstatus":"எச்சரிக்கை நிலை",
      "axisnumber":"அச்சு எண்",
      "page":"பக்கம்",
      "export":"ஏற்றுமதி",
      "search":"தேடல்",
      "overallalertreport":"ஒட்டுமொத்த எச்சரிக்கை அறிக்கை",
      "message":"செய்தி",
      "of":"இன்",
      "alarmreport":"எச்சரிக்கை அறிக்கை",
      "selectmachine":"இயந்திரத்தைத் தேர்ந்தெடுக்கவும்",
      "selecttype":"வகை தேர்ந்தெடு",
       "fromdate":"முதல் தேதி",
       "todate":"கடைசி தேதி",
       "all":"அனைத்தும்",
       "viewreport":"அறிக்கை",
       "selectoperator":"இயக்குபவர் தேர்ந்தெடு",
       "operator":"இயக்குபவர்",
       "machinename":"இயந்திரத்தின் பெயர்",
       "shifttime":"வேலை நேரம்",
       "shift":"வேலை",
       "operatorname":"இயக்குபவர் பெயர்",
       "alarmtime":"எச்சரிக்கை நேரம்",
       "alarmmessage":"எச்சரிக்கை செய்தி",
       "selectshift":"வேலை தேர்ந்தெடுக்கவும்",
       "alarmnumber":"எச்சரிக்கை எண்",
       "report":"அறிக்கை",
       "split":"பிளவு",
       "jobdescription":"வேலை விவரம்",
       "programnumber":"நிரல் எண்",
        "loadingandunloadingtime":"நேரம் ஏற்றுதல் மற்றும் இறக்கும்",
        "idletime":"செயலற்ற நேரம்",
        "totaldowntime":"மொத்த செயலற்ற நேரம்",
        "actualrunning":"உண்மையான இயங்கும்",
        "actualworkinghours":"உண்மையான வேலை நேரம்",
        "notificationsettings":"அறிவிப்பு அமைப்புகள்",
        "timeintervel":"நேர இடைவேளை",
        "reason":"காரணம்",
        "enable/disablenotification":"இயக்கு/முடக்கு அறிவிப்பு",
        "select":"தேர்வு",
        "machineregistration":"இயந்திர பதிவு",
        "controllermodelnumber":"கட்டுப்படுத்தி மாதிரி எண்",
        "machinetype":"இயந்திர வகை",
        "machineserialnumber":"இயந்திர வரிசை எண்",
        "unit":"அலகு",
        "unit1":"அலகு1",
         "unit2":"அலகு2",
         "unit3":"அலகு3",
         "unit4":"அலகு4",
         "unit5":"அலகு5",
         "selectunit":"அலகு தேர்ந்தெடுக்கவும்",
         "save":"சேமி",
         "cancel":"ரத்து",
         "close":"மூடு",
         "model":"மாதிரி",
         "serialnumber":"வரிசை எண்",
         "controller":"கட்டுப்படுத்தி",
         "ip":"ஐபி",
         "internetstatus":"இணைய நிலை",
        "ethernetstatus":"ஈத்தர்நெட் நிலை",
        "status":"நிலைமை",
        "shiftregistration":"வேலை பதிவு",
        "daystarttime":"நாள் தொடக்க நேரம்",
        "numberofshift":"வேலை எண்ணிக்கை",
        "shifttransactionregistration":"பரிவர்த்தனைகளின் வேலை பதிவு",
        "workingtime":"வேலை நேரம்",
        "shiftstarttime":"தொடக்க வேலை நேரம்",
        "shiftendtime":"வேலை நேரம் முடிந்தது",
        "target":"இலக்கு",
        "action":"செயல் ",
        "shiftnumber":"வேலை எண்",
        "allshiftchart":"அனைத்து வேலை வரைபடங்கள்",
        "endtime":"முடிவு நேரம்",
        "number":"எண்",
        "registrationcompleted":"பதிவு முடிந்தது",
        "clientregistration":"நுகர்வி பதிவு",
        "clientname":"நுகர்வி பெயர்",
        "emailid":"மின்னஞ்சல் முகவரி",
        "mobilenumber":"தொலைபேசி எண்",
        "required":"தேவையான",
        "name":"பெயர்",
        "operatorregistration":"இயக்குபவர் பதிவு",
      "operatorname":"இயக்குபவர் பெயர்",
      "others":"மற்றவர்கள்",
      "created":"உருவாக்கப்பட்டது",
      "from-todate":"முதல்-கடைசி தேதி",
      "userregistration":"உபயோகிப்போர் பதிவு",
      "role":"பங்கு",
      "firstname":"முதல் பெயர்",
      "lastname":"கடைசி பெயர்",
      "newuserregistration":"புதிய உபயோகிப்போர் பதிவு",
      "selectrole":"தேர்வு பங்கு",
      "userrole":"பயனர் பங்கு",
      "remarks":"கருத்துக்கள்",
      "edituserregistration":"பயனர் பதிவுகளைத் திருத்தவும்",
      "notvalidemailid":"செல்லுபடியாகாத மின்னஞ்சல் முகவரி இல்லை",
      "lastupdatedtime":"கடைசியாக புதுப்பிக்கப்பட்ட நேரம்",
      "downtimedetails":"செயலற்ற நேரம்",
      "possibleload&unloadtime":"சாத்தியமான சுமை & ஏற்ற நேரம்",
      "total":"மொத்தம்",
      "jobid":"வேலை ஐடி",
      "partscount":"பாகங்கள் எண்ணிக்கை",
      "rejects":"நிராகரிக்கப்பட்டது",
      "rework":"மறுவேலை",
      "inspection":"ஆய்வு",
      "remainingparts":"மீதமுள்ள பாகங்கள்",
      "partsdelivered":"பாகங்கள் வழங்கப்பட்டன",
      "stopping":"நிறுத்தும்",
      "remaining":"மீதமுள்ள",
      "graphicalrepresentation":"வரைகலை பிரதிநிதித்துவம்",
      "selectmachinename":"இயந்திரத்தின் பெயரைத் தேர்ந்தெடுக்கவும்",
      "selectdate":"தேதி தேர்வு",
      "parts":"பாகங்கள்",
      "jobregistration":"வேலை பதிவு",
      "partname":"பகுதி பெயர்",
      "partnumber":"பகுதி எண்",
      "orderquantity":"ஆர்டர் அளவு",
      "jobstartdate":"வேலை தொடக்க தேதி",
      "jobenddate":"வேலை முடிவு தேதி",
      "quantity":"அளவு",
      "startdate":"தொடக்க தேதி",
      "enddate":"கடைசி தேதி",
      "note:pleaseregisteroperationsundertheactionstabforeachjob":
      "குறிப்பு: தயவுசெய்து ஒவ்வொரு வேலைக்கும் நடவடிக்கைகளின் கீழ் பதிவுசெய்து கொள்ளுங்கள்",
      "companyname":"நிறுவனத்தின் பெயர்",
      "addressline1":"முகவரி 1",
      "addressline2":"முகவரி 2",
      "city":"நகரம்",
      "state":"மாநிலங்களில்",
      "country":"நாடு",
      "pincode":"அஞ்சல் குறியீடு",
      "agreethetermsandpolicy":"விதிமுறைகள் மற்றும் கொள்கையை ஏற்கவும்",
      "alreadyhaveanaccount":"ஏற்கனவே ஒரு கணக்கு உள்ளதா",
      "register":"பதிவு",
      "registertocontinuewith":"Yantra 24x7 தொடர பதிவு செய்யவும்",
      "aboutcompany":"நிறுவனம் பற்றி",
      "copyright":"பதிப்புரிமை",
      "allrightsreserved":"அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
      "privacypolicy":"தனியுரிமை கொள்கை",
      "terms&conditions":"விதிமுறைகள் மற்றும் நிபந்தனைகள்",
      "edituserprofile":"பயனர் சுயவிவரம் திருத்த",
      'recentalarms':"சமீபத்திய எச்சரிக்கை",
      "details":"விவரங்கள்",
      "partscountdetails":"பகுதிகள் எண்ணிக்கை விவரங்கள்",
      "datacollection":"தரவு சேகரிப்பு",
      "question1":"சிஎன்சி இயந்திரங்கள் இருந்து தரவு மீட்பு என்ன முறை",
      "answer1":"ஈத்தர்நெட் மற்றும் RS232 ( சீரியல் போர்ட் ) முறையில் தரவு மீட்பு",
      "question2":"சிஎன்சி மெஷினரிடமிருந்து தரவு மீட்டெடுப்பதற்கு எத்தனை வன்பொருள் சாதனம் தேவைப்படுகிறது",
      "answer2":"ஒன்று, வன்பொருள் சாதனம் ஈத்தர்நெட் பயன்முறையில் 10 சிஎன்சி இயந்திரங்கள் வரை இணைக்க முடியும்",
      "question3":"தரவு நுழைவு திரைகளை பயன்படுத்தும் கணினிகளில் இணைய அணுகல் தேவையா",
      "answer3":"ஆம்! பயன்பாடு நிறுவலுக்கு இணைய அணுகல் தேவைப்படுகிறது",
      "question4":"சிஎன்சி இயந்திரங்கள் நேரடியாக இணையத்துடன் இணைக்கப்பட்டுள்ளனவா",
      "answer4":"இல்லை! வன்பொருள் சாதனம் சுவிட்சுடன், கணினிகளுக்கான அணுகல், இயந்திரம் நேரடியாக இணையத்தில் அணுகல் தேவையில்லை.",
      "question5":"நான் பழைய இயந்திரங்கள் இருந்தால் - சீரியல் போர்ட்",
      "answer5":"எந்த பிரச்சினையும் இல்லை. Yantra 24x7 தரவு சேகரிக்க ஒவ்வொரு கணினிகளிலும் இணைக்க எளிதான ஒரு குறைந்த செலவு வன்பொருள் சாதனம் வழங்குகிறது",
      "question6":"வேலையில்லா காரணங்களுக்காக நுழைய ஒரு வழி இருக்கிறதா",
      "answer6":"ஆம்! Yantra 24x7 என்பது, பிசி  மற்றும் டேப்லெட்டுகளில் உள்ள தரவு நுழைவுத் திரையைப் பயன்படுத்துவது, பயனர் வரையறுக்கப்பட்ட வேலையில்லாத காரணங்களுக்காக நுழைவதை எளிதாக்குகிறது",
      "licensing":"உரிமம்",
      "question7":"ஒரு சிஎன்சி மெஷினின் ஒரு துண்டு இருந்து மற்றொரு உரிமம் செல்ல முடியும்",
      "answer7":"ஆம்! ஐபி அமைப்பை அடிப்படையாக இயந்திரத்திலிருந்து இயந்திரம் அனுமதிக்கும் உரிமங்களை நீங்கள் நகர்த்தலாம்",
      "question8":"நான் ஒரு ஆலையிலிருந்து இன்னொருவருக்கு உரிமம் வழங்கலாமா",
      "answer8":"ஆம்! ஆலை அதே கணக்குக்குள் இருக்கும் வரை உரிமங்களை எந்தவொரு கருவிகளுக்கும் நகர்த்த முடியும்",
      "question9":"உரிமம் அதிகரிக்கலாம் அல்லது எளிதாக குறைக்க முடியுமா",
      "reporting":"அறிக்கை",
      "question10":"எத்தனை பேர் ஒரு நேரத்தில் அறிக்கைகளை இயக்க முடியும்",
      "question11":"என் வசதிக்கு வெளியில் இருந்து அறிக்கைகளை அணுக முடியுமா",
      "answer11":"ஆம்! உங்களுக்கு இணைய அணுகல் இருக்கும் வரை, எங்கிருந்தும் அறிக்கைகள் எடுக்கலாம்",
      "question12":"சிஎன்சி இயந்திரத்தின் நிலையை தொலைபேசியிலிருந்து பார்க்க முடியுமா",
      "answer12":"ஆம்! தொலைபேசிகள் மற்றும் டேப்லெட்களுக்கான மொபைல் பயன்பாடுகள் Apple iOS மற்றும் Google Android இரண்டிற்கும் கிடைக்கின்றன",
      "question13":"சிஎன்சி இயந்திரத்தின் நிலையை பிசி  இருந்து  பார்க்க முடியுமா",
      "answer13":"ஆம்! நிச்சயமாக பிசி இருந்து தரவு கண்காணிக்க முடியும்",
      "question14":"எல்லா அறிக்கையையும் நான்  பார்க்க முடியுமா",
      "answer14":"நீங்கள் மாற்றீடாக, இயக்குபவர் வாரியாக, மணிநேர வாரியாக, திட்ட எண் வாரியாக எடுக்கலாம்",
      "question15":"நான் தேதிவாரியாக பயன்பாடுகளை இயந்திரத்தின் அறிக்கையை பார்க்க முடியுமா",
      "answer15":"ஆம்! தேதி மற்றும் மாதாந்திர இயந்திரத்தின் பயன்பாடுகளை பார்க்க முடியும்",
      "question16":"நான் சுழற்சி நேரம் மற்றும் பகுதிகள் எண்ணிக்கையை கணக்கிட முடியுமா",
      "answer16":"ஆம்! நீங்கள் சுழற்சி  நேரம் மற்றும் பாகங்களை கணக்கிட, இயந்திரத்தின் நிலையையும் பார்க்க முடியும்",
      "securityandprivacy":"பாதுகாப்பு மற்றும் தனியுரிமை",
      "question17":"எனது தரவு பாதுகாப்பானதா",
      "answer17":"ஆம்! அனைத்து தரவுகலும் கிளவுடில் பாதுகாக்கப்படுகிறது",
      "question18":"என் பணியாளர்களின் தகவலை நீங்கள் விற்க அல்லது கொடுக்கலாமா",
      "answer18":"இல்லை! இல்லை, எந்த சூழ்நிலையிலும் இல்லை",
      "mydata":"என் தரவு",
      "question19":"தரவுகளின் நகலை நான் பெறலாமா",
      "support":"ஆதரவு",
      "questoion20":"ரிமோட் பயன்பாட்டு ஆதரவுக்காக கட்டணம் விதிக்கிறீர்களா",
      "answer20":"",
      "question21":"பிழைத்திருத்தம் மற்றும் நெட்வொர்க்கிங் பிரச்சினைகள் போன்ற உதவி தேவைப்பட்டால்",
      "doyouwanttodelete":"நீக்க வேண்டுமா",
      "theusernameorpasswordisincorrect":"பயனர் பெயர் அல்லது கடவுச்சொல் தவறானது",
      "pleaseentercorrectemailorphonenumber":"சரியான மின்னஞ்சல் அல்லது தொலைபேசி எண்ணை உள்ளிடவும்",
      "checkyouremailandresetyourpassword":"உங்கள் மின்னஞ்சலை சரிபார்த்து உங்கள் கடவுச்சொல்லை மீட்டமைக்கவும்",
      "pleaseselectoperator":"தயவுசெய்து ஆபரேட்டரை தேர்ந்தெடுக்கவும்",
      "pleaseselectmachine":"தயவுசெய்து இயந்திரத்தைத் தேர்ந்தெடுக்கவும்",
      "breaktimedetails":"இடைவேளை விவரங்கள்",
      "breakstarttime":"இடைவேளை தொடக்க நேரம்",
      "breakendtime":"இடைவேளை முடிவு நேரம்",
      "breaktimeregistration":"இடைவேளை நேரம் பதிவு",
      "areyousurewanttologout":"நீங்கள் வெளியேற வேண்டுமா?",
      "thankyouforregistering":"Yantra24X7 உடன் பதிவுசெய்ததற்கு நன்றி",
      "required":"தேவையான",
      "notvalidemailid":"சரியான மின்னஞ்சல் இல்லை",
      "onlynumbersallowedmaximum10numbers":"எண்கள் மட்டுமே அனுமதிக்கப்பட்டன, அதிகபட்சம் 10 எண்கள்",
      "send":"அனுப்பு",
       "date":"தேதி",
       "servoload":"செர்வோ சுமை",
       "servotemp":"செர்வோ மோட்டார் வெப்பநிலை",
       "machinestatus":"இயந்திர நிலை",
       "jobname":"வேலை பெயர்",
       "currentstatus":"தற்போதைய நிலை",
       "lastcycle":"கடைசி சுழற்சி",
       "run":"இயக்க",
       "partsproduct":"பாகங்கள் தயாரிப்பு",
       "spindlespeed":"சுழல் வேகம்",
       "cycletimes":"சுழற்சி வரைபடங்கள்",
       "cyclestartchart":"சுழற்சி தொடக்க வரைபடங்கள்",
       "charts":"வரைபடங்கள்",
       "setting":"அமைப்பு",
       "demo":"டெமோ",
       "lastcuttingtime":"கடைசி வெட்டு நேரம்",
       "powerstatus":"சக்தி நிலை",
       "overallalarmhistory":"ஒட்டுமொத்த அலாரம் வரலாறு",
       "datetime":"தேதி நேரம்",
       "cyclestarttostart":"சுழற்சி தொடக்கம் முதல்  தொடக்கம் வரை",
       "view":"பார்வை",
       "yesterday":"நேற்று",
       "thisweek":"இந்த வாரம்",
       "lastweek":"கடந்த வாரம்",
       "thismonth":"இந்த மாதம்",
       "lastmonth":"கடந்த மாதம்",
       "machineutilized":"இயந்திரம் பயன்படுத்தப்பட்டது",
       "shiftutilized":"வேலை பயன்படுத்தப்பட்டது",
       "nonutilized":"பயன்படுத்தாதது",
       "target":"இலக்கு",
       "actual":"உண்மையான",
       "excess":"அதிகப்படியான",
       "shortfall":"பற்றாக்குறை",
       "nos":"எண்",
       "branch":"கிளை",
       "spindle":"சுழல்",
       "hmi":"எச்எம்ஐ",
       "cyclestopstart":"சுழற்சி முடிவு அட்டவணை",
       "oee":"ஓஇஇ",


      "registrationcompleted":"பதிவு முடிந்தது",
      "registrationfailed":"பதிவு தோல்வியடைந்தது",
      "updatedsuccessfully":"வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
      "updationfailed":"புதுப்பித்தல் தோல்வியடைந்தது",
      "deletesuccessfully":"வெற்றிகரமாக நீக்கப்பட்டது",
      "deletefailed":"நீக்குவது தோல்வியடைந்தது",


      


      

    }
    var ka_translations = {
      "login":"ಲಾಗಿನ್ ಮಾಡಿ",
"username":"ಬಳಕೆದಾರ ಹೆಸರು",
"password":"ಪಾಸ್ವರ್ಡ್",
"signup":"ಸೈನ್ ಅಪ್",
"forgotpassword":"ಪಾಸ್ವರ್ಡ್ ಮರೆತಿರಾ",
"haveaccount":"ಖಾತೆಯನ್ನು ಹೊಂದಿಲ್ಲ",
"signintocontinue":"Yantra24x7 ನೊಂದಿಗೆ ಮುಂದುವರಿಯಲು ಸೈನ್ ಇನ್ ಮಾಡಿ",
"dashboard":"ಡ್ಯಾಶ್ಬೋರ್ಡ್",
"alarms":"ಅಲಾರ್ಮ್",
"alert":"ಎಚ್ಚರಿಕೆ",
"alarmreport":"ಅಲಾರ್ಮ್ ವರದಿ",
"log":"ಲಾಗ್",
"report":"ವರದಿ",
"alerts":"ಎಚ್ಚರಿಕೆಗಳು",
"notificationsetting":"ಅಧಿಸೂಚನೆ ಸೆಟ್ಟಿಂಗ್",
"maintenance":"ನಿರ್ವಹಣೆ",
"master":"ಮಾಸ್ಟರ್",
"operatorentry":"ಆಪರೇಟರ್ ಎಂಟ್ರಿ",
"pulsecodetemperature":"ನಾಡಿ ಕೋಡ್ ತಾಪಮಾನ",
"machine":"ಯಂತ್ರ",
"machines":"ಯಂತ್ರಗಳು",
"shift":"ಶಿಫ್ಟ್",
"client":"ಗ್ರಾಹಕ",
"job":"ಜಾಬ್",
"user":"ಬಳಕೆದಾರ",
"operator":"ಆಪರೇಟರ್",
"operatorallocation":"ಆಪರೇಟರ್ ಹಂಚಿಕೆ",
"feature":"ವೈಶಿಷ್ಟ್ಯ",
"home":"ಮುಖಪುಟ",
"export":"ರಫ್ತು",
"overallmachinesstatus":"ಒಟ್ಟಾರೆ ಯಂತ್ರಗಳ ಸ್ಥಿತಿ",
"running":"ರನ್ನಿಂಗ್",
"idle":"ಐಡಲ್",
"stop":"ನಿಲ್ಲಿಸು",
"nodata":"ಮಾಹಿತಿ ಇಲ್ಲ",
"today":"ಇಂದು",
"shifttime":"ಶಿಫ್ಟ್ ಟೈಮ್",
"starttime":"ಆರಂಭವಾಗುವ",
"lastupdate":"ಕೊನೆಯ ನವೀಕರಣ",
"utilization":"ಬಳಕೆ",
"partsproduced":"ಭಾಗಗಳನ್ನು ಉತ್ಪಾದಿಸಲಾಗಿದೆ",
"cycletime":"ಸೈಕಲ್ ಸಮಯ",
"runtime":"ರನ್ ಟೈಮ್",
"downtime":"ಸಮಯ ಕೆಳಗೆ",
"stoptime":"ಸಮಯವನ್ನು ನಿಲ್ಲಿಸಿ",
"nos":"ನಾಸ್",
"notavaliable":"ಲಭ್ಯವಿಲ್ಲ",
"currentshiftdetails":"ಪ್ರಸ್ತುತ ಶಿಫ್ಟ್ಸ್ ವಿವರಗಳು",
"operatorname":"ಆಪರೇಟರ್ ಹೆಸರು",
"operatorid":"ಆಪರೇಟರ್ ID",
"machineid":"ಯಂತ್ರ ID",
"machinename":"ಯಂತ್ರದ ಹೆಸರು",
"description":"ವಿವರಣೆ",
"search":"ಹುಡುಕಿ",
"page":"ಪುಟ",
"overallalarm":"ಒಟ್ಟಾರೆ ಅಲಾರ್ಮ್",
"alarmtype":"ಅಲಾರ್ಮ್ ಟೈಪ್",
"date":"ದಿನಾಂಕ",
"time":"ಸಮಯ",
"duration":"ಅವಧಿ",
"idletime":"ನಿಷ್ಕ್ರಿಯ ಸಮಯ",
"overallalarmhistory":"ಒಟ್ಟಾರೆ ಅಲಾರ್ಮ್ ಇತಿಹಾಸ",
"alarmstatus":"ಅಲಾರ್ಮ್ ಸ್ಥಿತಿ",
"axisnumber":"ಆಕ್ಸಿಸ್ ಸಂಖ್ಯೆ",
"overallalertreport":"ಒಟ್ಟಾರೆ ಎಚ್ಚರಿಕೆ ವರದಿ",
"overallalarmreport":"ಒಟ್ಟಾರೆ ಅಲಾರ್ಮ್ ವರದಿ",
"message":"ಸಂದೇಶ",
"of":"ಆಫ್",
"selectmachine":"ಯಂತ್ರ ಆಯ್ಕೆಮಾಡಿ",
"selecttype":"ಕೌಟುಂಬಿಕತೆ ಆಯ್ಕೆಮಾಡಿ",
"fromdate":"ದಿನಾಂಕದಿಂದ",
"todate":"ದಿನಾಂಕಕ್ಕೆ",
"all":"ಎಲ್ಲಾ",
"viewreport":"ವರದಿ ವೀಕ್ಷಿಸಿ",
"selectoperator":"ಆಪರೇಟರ್ ಆಯ್ಕೆಮಾಡಿ",
"alarmtime":"ಅಲಾರ್ಮ್ ಟೈಮ್",
"alarmmessage":"ಅಲಾರ್ಮ್ ಸಂದೇಶ",
"selectshift":"Shift ಆಯ್ಕೆಮಾಡಿ",
"alarmnumber":"ಅಲಾರ್ಮ್ ಸಂಖ್ಯೆ",
"split":"ವಿಭಜಿಸಿ",
"jobdescription":"ಕೆಲಸದ ವಿವರ",
"programnumber":"ಕಾರ್ಯಕ್ರಮ ಸಂಖ್ಯೆ",
"loadingandunloadingtime":"ಸಮಯ ಲೋಡ್ ಆಗುತ್ತಿದೆ ಮತ್ತು ಅನ್ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ",
"ldletime":"ಐಡಲ್ ಸಮಯ",
"totaldowntime":"ಒಟ್ಟು ಡೌನ್ ಟೈಮ್",
"actualrunning":"ನಿಜವಾದ ರನ್ನಿಂಗ್",
"actualworkinghours":"ವಾಸ್ತವ ಕೆಲಸದ ಅವರ್ಸ್",
"notificationsettings":"ಅಧಿಸೂಚನೆ ಸೆಟ್ಟಿಂಗ್ಗಳು",
"timeinervel":"ಟೈಮ್ ಇಂಟರ್ವೆಲ್",
"reason":"ಕಾರಣ",
"enable/disablenotification":"ಅಧಿಸೂಚನೆ ಸಕ್ರಿಯಗೊಳಿಸಿ / ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ",
"select":"ಆಯ್ಕೆಮಾಡಿ",
"machineregistration":"ಯಂತ್ರ ನೋಂದಣಿ",
"controllermodelnumber":"ನಿಯಂತ್ರಕ ಮಾದರಿ ಸಂಖ್ಯೆ",
"machinetype":"ಯಂತ್ರ ಪ್ರಕಾರ",
"machineserialnumber":"ಯಂತ್ರ ಸೀರಿಯಲ್ ಸಂಖ್ಯೆ",
"unit":"ಘಟಕ",
"unit1":"ಯುನಿಟ್ 1",
"unit2":"ಯುನಿಟ್ 2",
"unit3":"ಯುನಿಟ್ 3",
"unit4":"ಯುನಿಟ್ 4",
"unit5":"ಯುನಿಟ್ 5",
"selectunit":"ಘಟಕವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ",
"save":"ಉಳಿಸಿ",
"cancel":"ರದ್ದುಮಾಡಿ",
"close":"ಮುಚ್ಚಿ",
"model":"ಮಾದರಿ",
"serialnumber":"ಕ್ರಮ ಸಂಖ್ಯೆ",
"controller":"ನಿಯಂತ್ರಕ",
"ip":"ಐಪಿ",
"internetstatus":"ಇಂಟರ್ನೆಟ್ ಸ್ಥಿತಿ",
"ethernetstatus":"ಎತರ್ನೆಟ್ ಸ್ಥಿತಿ",
"status":"ಸ್ಥಿತಿ",
"shiftregistration":"ಶಿಫ್ಟ್ ನೋಂದಣಿ",
"daystarttime":"ದಿನ ಪ್ರಾರಂಭ ಸಮಯ",
"numberofshift":"ಶಿಫ್ಟ್ ಸಂಖ್ಯೆ",
"shifttransactionregistration":"ಶಿಫ್ಟ್ ಟ್ರಾನ್ಸಾಕ್ಷನ್ ನೋಂದಣಿ",
"workingtime":"ಕೆಲಸದ ಸಮಯ",
"shiftstarttime":"ಶಿಫ್ಟ್ ಪ್ರಾರಂಭ ಸಮಯ",
"shiftendtime":"ಎಂಡ್ ಟೈಮ್ ಶಿಫ್ಟ್",
"target":"ಗುರಿ",
"action":"ಕ್ರಿಯೆ",
"shiftnumber":"ಶಿಫ್ಟ್ ಸಂಖ್ಯೆ",
"endtime":"ಎಂಡ್ ಟೈಮ್",
"number":"ಸಂಖ್ಯೆ",
"registrationcompleted":"ನೋಂದಣಿ ಪೂರ್ಣಗೊಂಡಿದೆ",
"clientregistration":"ಗ್ರಾಹಕ ನೋಂದಣಿ",
"clientname":"ಕಕ್ಷಿದಾರನ ಹೆಸರು",
"emailid":"ಇಮೇಲ್ ಐಡಿ",
"mobilenumber":"ಮೊಬೈಲ್ ನಂಬರ",
"required":"ಅಗತ್ಯವಿದೆ",
"name":"ಹೆಸರು",
"operatorregistration":"ಆಪರೇಟರ್ ನೋಂದಣಿ",
"others":"ಇತರರು",
"created":"ರಚಿಸಲಾಗಿದೆ",
"from-todate":"ಇಂದಿನಿಂದ",
"userregistration":"ಬಳಕೆದಾರರ ನೋಂದಣಿ",
"role":"ಪಾತ್ರ",
"firstname":"ಮೊದಲ ಹೆಸರು",
"lastname":"ಕೊನೆಯ ಹೆಸರು",
"newuserregistration":"ಹೊಸ ಬಳಕೆದಾರ ನೋಂದಣಿ",
"selectrole":"ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
"userrole":"ಬಳಕೆದಾರರ ಪಾತ್ರ",
"remarks":"ಟೀಕೆಗಳು",
"edituserregistration":"ಬಳಕೆದಾರರ ನೋಂದಣಿ ಸಂಪಾದಿಸಿ",
"notvalidemailid":"ಮಾನ್ಯವಾದ ಇಮೇಲ್ ಐಡಿ ಅಲ್ಲ",
"lastupdatedtime":"ಕೊನೆಯ ನವೀಕರಣ ಸಮಯ",
"downtimedetails":"ಡೌನ್ ಸಮಯ ವಿವರಗಳು",
"possibleload&unloadtime":"ಸಂಭವನೀಯ ಲೋಡ್ ಮತ್ತು ಲೋಡ್ ಸಮಯ",
"total":"ಒಟ್ಟು",
"jobid":"ಜಾಬ್ ಐಡಿ",
"partscount":"ಭಾಗಗಳು ಕೌಂಟ್",
"rejects":"ತಿರಸ್ಕರಿಸುತ್ತದೆ",
"rework":"ಮರುಕಳಿಸು",
"inspection":"ತಪಾಸಣೆ",
"remainingparts":"ಉಳಿದ ಭಾಗಗಳು",
"partsdelivered":"ಭಾಗಗಳನ್ನು ತಲುಪಿಸಲಾಗಿದೆ",
"stopping":"ನಿಲ್ಲಿಸಲಾಗುತ್ತಿದೆ",
"remaining":"ಉಳಿದ",
"graphicalrepresentation":"ಚಿತ್ರಾತ್ಮಕ ಪ್ರಾತಿನಿಧ್ಯ",
"selectmachinename":"ಯಂತ್ರದ ಹೆಸರನ್ನು ಆಯ್ಕೆ ಮಾಡಿ",
"selectdate":"ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ",
"parts":"ಭಾಗಗಳು",
"jobregistration":"ಜಾಬ್ ನೋಂದಣಿ",
"partname":"ಬಿಡಿಭಾಗದ ಹೆಸರು",
"partnumber":"ಭಾಗದ ಸಂಖ್ಯೆ",
"orderquantity":"ಆರ್ಡರ್ ಪ್ರಮಾಣ",
"jobstartdate":"ಜಾಬ್ ಪ್ರಾರಂಭ ದಿನಾಂಕ",
"jobenddate":"ಜಾಬ್ ಎಂಡ್ ದಿನಾಂಕ",
"quantity":"ಪ್ರಮಾಣ",
"startdate":"ಪ್ರಾರಂಭ ದಿನಾಂಕ",
"enddate":"ಅಂತಿಮ ದಿನಾಂಕ",
"note=>pleaseregisteroperationsundertheactionstabforeachjob":"ಗಮನಿಸಿ => ದಯವಿಟ್ಟು ಪ್ರತಿ ಕೆಲಸಕ್ಕಾಗಿ ಕ್ರಿಯೆಗಳ ಟ್ಯಾಬ್ ಅಡಿಯಲ್ಲಿ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ನೋಂದಾಯಿಸಿ",
"companyname":"ಸಂಸ್ಥೆಯ ಹೆಸರು",
"addressline1":"ವಿಳಾಸ ಸಾಲು 1",
"addressline2":"ವಿಳಾಸ ಸಾಲು 2",
"city":"ನಗರ",
"State":"ರಾಜ್ಯ",
"country":"ದೇಶ",
"pincode":"ಪಿನ್ ಕೋಡ್",
"agreethetermsandpolicy":"ನಿಯಮಗಳು ಮತ್ತು ನೀತಿಯನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಿ",
"alreadyhaveanaccount":"ಈಗಾಗಲೇ ಖಾತೆ ಹೊಂದಿದ್ದೀರ",
"register":"ನೋಂದಣಿ",
"registertocontinuewith":"Yantra24x7 ನೊಂದಿಗೆ ಮುಂದುವರಿಯಲು ನೋಂದಣಿ ಮಾಡಿ",
"aboutcompany":"ಕಂಪನಿ ಬಗ್ಗೆ",
"copyright":"ಕೃತಿಸ್ವಾಮ್ಯ",
"machineip":"ಮೆಷಿನ್ IP",
"allrightsreserved":"ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ",
"privacypolicy":"ಗೌಪ್ಯತಾ ನೀತಿ",
"terms&conditions":"ನಿಯಮ ಮತ್ತು ಶರತ್ತುಗಳು",
"edituserprofile":"ಬಳಕೆದಾರ ಪ್ರೊಫೈಲ್ ಸಂಪಾದಿಸಿ",
"recentalarms":"ಇತ್ತೀಚಿನ ಅಲಾರಮ್ಗಳು",
"alarms":"ಎಚ್ಚರಿಕೆಗಳು",
"details":"ವಿವರಗಳು",
"deviceip":"ಸಾಧನ ip",
"partscountdetails":"ಭಾಗಗಳು ಕೌಂಟ್ ವಿವರಗಳು",
"datacollection":"ಮಾಹಿತಿ ಸಂಗ್ರಹ",
"question1":"CNC ಯಂತ್ರಗಳಿಂದ ಡೇಟಾ ಮರುಪಡೆಯುವಿಕೆ ಏನು ಮೋಡ್",
"answer1":"ಈಥರ್ನೆಟ್ ಮತ್ತು ರೂ .232 (ಸೀರಿಯಲ್ ಪೋರ್ಟ್) ಮೋಡ್ನಿಂದ ಡೇಟಾ ಮರುಪಡೆಯುವಿಕೆ",
"question2":"ಸಿಎನ್ಸಿ ಮೆಷಿನ್ನಿಂದ ಡೇಟಾವನ್ನು ಮರುಪಡೆಯಲು ಎಷ್ಟು ಹಾರ್ಡ್ವೇರ್ ಸಾಧನ ಅಗತ್ಯವಿದೆ",
"answer2":"ಒಂದು, ಈಥರ್ನೆಟ್ ಮೋಡ್ಗಾಗಿ 10 CNC ಯಂತ್ರಗಳವರೆಗೆ ಹಾರ್ಡ್ವೇರ್ ಸಾಧನವು ಸಂಪರ್ಕಿಸಬಹುದು",
"question3":"ಡಾಟಾ ಎಂಟ್ರಿ ಸ್ಕ್ರೀನ್ಗಳನ್ನು ಬಳಸುವ ಕಂಪ್ಯೂಟರ್ಗಳಲ್ಲಿ ಇಂಟರ್ನೆಟ್ ಪ್ರವೇಶ ಬೇಕಾಗುತ್ತದೆ",
"answer3":"ಹೌದು! ಅಪ್ಲಿಕೇಶನ್ನ ಅನುಸ್ಥಾಪನೆಗೆ ಇಂಟರ್ನೆಟ್ ಪ್ರವೇಶದ ಅಗತ್ಯವಿದೆ",
"question4":"ಸಿಎನ್ಸಿ ಯಂತ್ರಗಳು ಇಂಟರ್ನೆಟ್ಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕ ಹೊಂದಿದ್ದೀರಾ?",
"answer4":"ಇಲ್ಲ! ಸ್ವಿಚ್ ಜೊತೆಗೆ ಯಂತ್ರಾಂಶ ಸಾಧನ, ಯಂತ್ರಗಳಿಗೆ ಪ್ರವೇಶ, ಯಂತ್ರಗಳಿಗೆ ಅಂತರ್ಜಾಲಕ್ಕೆ ನೇರ ಪ್ರವೇಶ ಅಗತ್ಯವಿಲ್ಲ",
"question5":"ಹಳೆಯ ಯಂತ್ರಗಳನ್ನು ನಾನು ಹೊಂದಿದ್ದರೆ - ಸೀರಿಯಲ್ ಪೋರ್ಟ್",
"answer5":"ಯಾವ ತೊಂದರೆಯಿಲ್ಲ. ಯಂತ್ರ 24x7 ಕಡಿಮೆ ವೆಚ್ಚದ ಹಾರ್ಡ್ವೇರ್ ಸಾಧನವನ್ನು ಒದಗಿಸುತ್ತದೆ, ಅದು ಡೇಟಾವನ್ನು ಸಂಗ್ರಹಿಸಲು ಪ್ರತಿ ಯಂತ್ರಗಳಿಗೆ ಸಂಪರ್ಕಿಸಲು ಸುಲಭವಾಗಿದೆ",
"question6":"ಡೌನ್ಟೈಮ್ ಕಾರಣಗಳಿಗಾಗಿ ಪ್ರವೇಶಿಸಲು ಒಂದು ಮಾರ್ಗವಿದೆಯೇ",
"answer6":"ಹೌದು! ಯಂತ್ರ 24x7 ಬಳಕೆದಾರರು ವ್ಯಾಖ್ಯಾನಿಸಿದ ಅಲಭ್ಯತೆಯನ್ನು ಕಾರಣಗಳಿಗಾಗಿ ಪ್ರವೇಶಿಸಲು PC ಮತ್ತು ಟ್ಯಾಬ್ಲೆಟ್ಗಳಲ್ಲಿ ಡೇಟಾ ಪ್ರವೇಶ ಪರದೆಯನ್ನು ಬಳಸಲು ಸುಲಭವಾಗಿದೆ.",
"licensing":"ಪರವಾನಗಿ",
"question7":"ನಾನು ಸಿಎನ್ಸಿ ಮೆಷಿನ್ನ ಒಂದು ತುಣುಕಿನಿಂದ ಇನ್ನೊಂದಕ್ಕೆ ಪರವಾನಗಿಗಳನ್ನು ವರ್ಗಾಯಿಸಬಹುದೇ?",
"answer7":"ಹೌದು! ಐಪಿ ಕೊಫಿಗರೇಷನ್ ಆಧರಿಸಿ ಯಂತ್ರದಿಂದ ಯಂತ್ರಕ್ಕೆ ಪರವಾನಗಿಗಳನ್ನು ಸರಿಸಲು ನೀವು ಮುಕ್ತರಾಗಿದ್ದೀರಿ",
"question8":"ನಾನು ಒಂದು ಸಸ್ಯದಿಂದ ಇನ್ನೊಂದಕ್ಕೆ ಪರವಾನಗಿಗಳನ್ನು ಸಾಗಿಸಬಹುದೇ?",
"answer8":"ಹೌದು! ಸಸ್ಯಗಳು ಅದೇ ಖಾತೆಯೊಳಗೆ ಇರುವವರೆಗೂ ಪರವಾನಗಿಗಳನ್ನು ಯಾವುದೇ ತುಂಡು ಉಪಕರಣಗಳಿಗೆ ವರ್ಗಾಯಿಸಬಹುದು",
"question9":"ಪರವಾನಗಿಯನ್ನು ಹೆಚ್ಚಿಸಬಹುದು ಅಥವಾ ಸುಲಭವಾಗಿ ಕಡಿಮೆ ಮಾಡಬಹುದು",
"reporting":"ವರದಿ ಮಾಡಲಾಗುತ್ತಿದೆ",
"question10":"ಒಂದೇ ಸಮಯದಲ್ಲಿ ಎಷ್ಟು ಜನರನ್ನು ವರದಿ ಮಾಡಬಹುದು",
"question11":"ನನ್ನ ಸೌಲಭ್ಯದ ಹೊರಗಿನಿಂದ ವರದಿಗಳನ್ನು ನಾನು ಪ್ರವೇಶಿಸಬಹುದೇ?",
"answer11":"ಹೌದು! ನೀವು ಇಂಟರ್ನೆಟ್ ಪ್ರವೇಶವನ್ನು ಹೊಂದಿರುವವರೆಗೂ, ಎಲ್ಲಿಂದಲಾದರೂ ವರದಿಗಳನ್ನು ಚಾಲನೆ ಮಾಡಬಹುದು",
"question12":"ಸಿಎನ್ಸಿ ಯಂತ್ರದ ಸ್ಥಿತಿಯನ್ನು ಫೋನ್ನಿಂದ ವೀಕ್ಷಿಸಬಹುದು",
"answer12":"ಹೌದು! ಫೋನ್ ಮತ್ತು ಟ್ಯಾಬ್ಲೆಟ್ಗಳಿಗಾಗಿ ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ಗಳು ಆಪಲ್ ಐಒಎಸ್ ಮತ್ತು ಗೂಗಲ್ ಆಂಡ್ರಾಯ್ಡ್ ಎರಡಕ್ಕೂ ಲಭ್ಯವಿದೆ",
"question13":"ಸಿಎನ್ಸಿ ಯಂತ್ರದ ಸ್ಥಿತಿಯನ್ನು ಪಿಸಿಯಿಂದ ವೀಕ್ಷಿಸಬಹುದು",
"answer13":"ಹೌದು! ಸಹಜವಾಗಿ ದಶಮಾಂಶ ಪಿಸಿ ನಿಂದ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಬಹುದು",
"question14":"ನಾನು ನೋಡಬಹುದಾದ ಎಲ್ಲಾ ವರದಿಗಳು ಯಾವುವು",
"answer14":"ನೀವು shiftwise ವೀಕ್ಷಿಸಬಹುದು, ಆಪರೇಟರ್ ಬುದ್ಧಿವಂತ, ಅವರ್ ಬುದ್ಧಿವಂತ, ಪ್ರೋಗ್ರಾಂ ಸಂಖ್ಯೆ ಬುದ್ಧಿವಂತ ವರದಿಗಳು",
"question15":"ನಾನು ಯಂತ್ರ ಬಳಕೆ ದಿನಾಂಕದಂದು ವೀಕ್ಷಿಸಬಹುದು",
"answer15":"ಹೌದು! ದಿನಾಂಕದಂದು ಮತ್ತು ಮಾಸಿಕ ಯಂತ್ರ ಬಳಕೆಯು ವೀಕ್ಷಿಸಬಹುದು",
"question16":"ನಾನು ಸೈಕಲ್ ಟೈಮ್ ಮತ್ತು ಭಾಗಗಳು ಕೌಂಟ್ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಬಹುದು",
"answer16":"ಹೌದು! ನೀವು ಯಂತ್ರದ ಸ್ಥಿತಿ ಜೊತೆಗೆ ಸೈಕಲ್ ಟೈಮ್ ಮತ್ತು ಭಾಗಗಳು ಎಣಿಕೆ ಮಾನಿಟರ್ ಮಾಡಬಹುದು",
"securityandprivacy":"ಭದ್ರತೆ ಮತ್ತು ಗೌಪ್ಯತೆ",
"question17":"ನನ್ನ ಡೇಟಾ ಸುರಕ್ಷಿತವಾಗಿದೆ",
"answer17":"ಹೌದು! ಎಲ್ಲಾ ಡೇಟಾವನ್ನು ಮೇಘ ಮತ್ತು ರವಾನೆಗೆ ಹರಡುತ್ತದೆ",
"question18":"ನನ್ನ ಯಾವುದೇ ಸಿಬ್ಬಂದಿ ಮಾಹಿತಿಯನ್ನು ನೀವು ಮಾರಾಟ ಮಾಡುತ್ತೀರಿ ಅಥವಾ ಕೊಡುತ್ತೀರಾ?",
"answer18":"ಇಲ್ಲ! ಎಂದಿಗೂ, ಯಾವುದೇ ಸಂದರ್ಭಕ್ಕೂ ಅಲ್ಲ",
"mydata":"ನನ್ನ ಡೇಟಾ",
"question19":"ನಾನು ಡೇಟಾದ ನಕಲನ್ನು ಪಡೆಯಬಹುದೆ?",
"support":"ಬೆಂಬಲ",
"question20":"ದೂರಸ್ಥ ಅಪ್ಲಿಕೇಶನ್ ಬೆಂಬಲಕ್ಕಾಗಿ ನೀವು ಶುಲ್ಕ ವಿಧಿಸುತ್ತೀರಾ?",
"answer20":"ಇಲ್ಲ! ಇಮೇಲ್, ಟೆಲಿಫೋನ್ ಮತ್ತು ವೆಬ್ ಬೆಂಬಲದ ಮೂಲಕ ಅಪ್ಲಿಕೇಶನ್ ಬೆಂಬಲವನ್ನು ಎಲ್ಲಾ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಸಾಧನಗಳಿಗೆ ಸೇರಿಸಿಕೊಳ್ಳಲಾಗಿದೆ. ಆನ್-ಸೈಟ್ ಸಮಯವನ್ನು ಆನ್-ಸೈಟ್ ಸಮಯಕ್ಕೆ ವಿನಂತಿಸಿದರೆ ಅಥವಾ ಅಗತ್ಯವಿದೆಯೇ ಆನ್-ಸೈಟ್ ದರಗಳು ಅನ್ವಯಿಸುತ್ತವೆ",
"question21":"ತೊಂದರೆಗೊಳಗಾದ ನೆಟ್ವರ್ಕಿಂಗ್ ಸಮಸ್ಯೆಗಳಂತಹ ನನಗೆ ಸಹಾಯ ಅಗತ್ಯವಿದ್ದರೆ",
"answer21":"ಅವರು ಒಂದು ಬಾರಿ ಶುಲ್ಕದಲ್ಲಿ ಸೇರಿಸಿಕೊಳ್ಳದಿದ್ದರೂ, ಯಂತ್ರ 24x7 ತಾಂತ್ರಿಕ ಸೇವೆಗಳು ಯಾವಾಗಲೂ ಲಭ್ಯವಿವೆ.",
"doyouwanttodelete":"ನೀವು ಅಳಿಸಲು ಬಯಸುವಿರಾ",
"theusernameorpasswordisincorrect":"ಬಳಕೆದಾರಹೆಸರು ಅಥವಾ ಪಾಸ್ವರ್ಡ್ ತಪ್ಪಾಗಿದೆ",
"pleaseentercorrectemailorphonenumber":"ಸರಿಯಾದ ಇಮೇಲ್ ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
"checkyouremailandresetyourpassword":"ನಿಮ್ಮ ಇಮೇಲ್ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಪಾಸ್ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ",
"pleaseselectoperator":"ದಯವಿಟ್ಟು ಆಪರೇಟರ್ ಆಯ್ಕೆಮಾಡಿ",
"pleaseselectmachine":"ದಯವಿಟ್ಟು ಯಂತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
"breaktimedetails":"ಸಮಯ ವಿವರಗಳನ್ನು ಮುರಿಯಿರಿ",
"breakstarttime":"ಬ್ರೇಕ್ ಸ್ಟಾರ್ಟ್ ಟೈಮ್",
"breakendtime":"ಬ್ರೇಕ್ ಎಂಡ್ ಟೈಮ್",
"breaktimeregistration":"ಬ್ರೇಕ್ ಟೈಮ್ ರಿಜಿಸ್ಟ್ರೇಶನ್",
"areyousurewanttologout":"ನೀವು ಲಾಗ್ಔಟ್ ಮಾಡಲು ಬಯಸುವಿರಾ?",
"thankyouforregistering":"Yantra24X7 ನೊಂದಿಗೆ ನೋಂದಾಯಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು",
"notvaliedemailid":"ಮಾನ್ಯ ಇಮೇಲ್ ಇಲ್ಲ",
"onlynumbersallowedmaximum10numbers":"ಮಾತ್ರ ಸಂಖ್ಯೆಗಳು ಅನುಮತಿಸಲಾಗಿದೆ, ಗರಿಷ್ಠ 10 ಸಂಖ್ಯೆಗಳು",
"send":"ಕಳುಹಿಸು",
"servoload":"ಸರ್ವೋ ಲೋಡ್",
"servotemp":"ಸರ್ವೋ ಮೋಟಾರ್ ತಾಪಮಾನ",
"machinestatus":"ಯಂತ್ರ ಸ್ಥಿತಿ",
"jobname":"ಜಾಬ್ ಹೆಸರು",
"currentstatus":"ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ",
"lastcycle":"ಕೊನೆಯ ಸೈಕಲ್",
"run":"ರನ್",
"partsproduct":"ಭಾಗಗಳನ್ನು ಉತ್ಪಾದಿಸಲಾಗಿದೆ",
"cyclestartchart":"ಸೈಕಲ್ ಆರಂಭದ ಚಾರ್ಟ್",
"charts":"ಪಟ್ಟಿಯಲ್ಲಿ",
"allshiftchart":"ಎಲ್ಲಾ ಶಿಫ್ಟ್ ಚಾರ್ಟ್",
"setting":"ಹೊಂದಿಸಲಾಗುತ್ತಿದೆ",
"demo":"ಡೆಮೊ",
"lastcuttingtime":"ಕೊನೆಯ ಕಟಿಂಗ್ ಟೈಮ್",
"powerstatus":"ವಿದ್ಯುತ್ ಸ್ಥಿತಿ",
"overallalerthistory":"ಒಟ್ಟಾರೆ ಎಚ್ಚರಿಕೆ ಇತಿಹಾಸ",
"datetime":"ದಿನಾಂಕ ಸಮಯ",
"cyclestarttostart":"ಸೈಕಲ್ ಆರಂಭಿಸಲು ಪ್ರಾರಂಭಿಸಿ",
"yesterday":"ನಿನ್ನೆ",
"thisweek":"ಈ ವಾರ",
"lastweek":"ಕಳೆದ ವಾರ",
"thismonth":"ಈ ತಿಂಗಳು",
"lastmonth":"ಕಳೆದ ತಿಂಗಳು",
"registrationfailed":"ನೋಂದಣಿ ವಿಫಲವಾಗಿದೆ",
"updatedsuccessfully":"ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ",
"updationfailed":"ನವೀಕರಣವು ವಿಫಲವಾಗಿದೆ",
"deletedsuccessfully":"ಯಶಸ್ವಿಯಾಗಿ ಅಳಿಸಿ",
"deletefailed":"ಅಳಿಸಲು ವಿಫಲವಾಗಿದೆ",
"spindlespeed":"ಸ್ಪಿಂಡಲ್ ಸ್ಪೀಡ್",
"machineutilized":"ಯಂತ್ರ ಬಳಕೆ",
"shiftutilized":"ಬಳಸಿದ ಶಿಫ್ಟ್",
"nonutilized":"ಬಳಸಲಾಗುವುದಿಲ್ಲ",
"target":"ಗುರಿ",
"actual":"ನಿಜವಾದ",
"excess":"ಅಧಿಕ",
"shortfall":"ಕೊರತೆ",
"nos":"ಸಂಖ್ಯೆ",
"branch":"ಶಾಖೆ",
"spindle":"ಸ್ಪಿಂಡಲ್",
"cyclestopchart":"ಚಕ್ರ ನಿಲ್ಲಿಸುವ ಚಾರ್ಟ್",
"hmi":"ಹೆಚ್ಮೀನಾನು",
"oee":"ದಿಇಇ"
    }


var hi_translations = {
  "login":"लॉगिन करे",
  "username":"उपयोगकर्ता नाम",
     "password":"पारण शब्द",
     "signup":"साइन अप करें",
     "forgotpassword":"पासवर्ड भूल गए",
     "haveaccount":"खाता है",
     "signintocontinue":"Yantra24x7 जारी रखने के लिए साइनइन",
      "dashboard":"डैशबोर्ड",
      "alarms":"अलार्म ",
      "alert":"चेतावनी ",
      "alarmreport":"अलार्म रिपोर्ट",
      "log":"लॉग",
      "report":"रिपोर्ट",
      "notificationsetting":"अधिसूचना सेटिंग",
      "maintenance":"रखरखाव",
      "master":"स्वामी",
      "operatorentry":"ऑपरेटर प्रविष्टि",
      "machine":"मशीन",
      "machines":"मशीनों",
      "pulsecodetemperature":"पल्स कोड तापमान",
      "shift":"शिफ्ट",
      "client":"ग्राहक",
      "job":"काम",
      "user":"उपयोगकर्ता",
      "operator":"ऑपरेटर",
      "operatorallocation":"ऑपरेटर आवंटन",
      "feature":"सुविधा",
      "home":"होम",
      "export":"निर्यात",
      "overallmachinesstatus":"समग्र मशीन की स्थिति",
      "running":"चल रही हे   ",
      "idle":"निष्क्रिय",
      "stop":"ऱोक",
      "nodata":"कोई आकड़ा उपलब्ध नहीं है",
      "today":"आज",
      "shifttime":"शिफ्ट समय",
      "starttime":"समय शुरू",
      "lastupdate":"आखिरी अपडेट",
      "utilization":"उपयोग",
      "partsproduced":"उतपादित भागों",
      "cycletimes":"समय चक्र",
      "runtime":"क्रम",
      "downtime":"स्र्कना",
      "stoptime":"रोक समय",
      "nos":"nos",
      "notavaliable":"उपलब्ध नहीं है",
      "currentshiftdetails":"वर्तमान शिफ्ट विवरण",
      "operatorname":"ऑपरेटर का नाम",
      "operatorid":"ऑपरेटर आईडी",
      "machineid":"मशीन आईडी",
      "machinename":"मशीन का नाम",
      "description":"विवरण",
      "search":"खोज",
      "page":"पृष्ठ",
      "target":"लक्ष्य",
      "overallalarm":"समग्र अलार्म",
      "alarmtype":"अलार्म प्रकार",
      "date":"तारीख",
      "time":"समय",
      "duration":"अवधि",
      "overallalarmhistory":"समग्र अलार्म इतिहास",
      "alarmstatus":"अलार्म स्थिति",
      "axisnumber":"धुरी संख्या",
      "export":"निर्यात",
      "overallalertreport":"समग्र चेतावनी रिपोर्ट",
      "message":"संदेश",
      "of":"का",
      "alarmreport":"अलार्म रिपोर्ट",
      "selectmachine":"मशीन चुने",
      "selecttype":"प्रकार चुनें",
       "fromdate":"तारीख से",
       "todate":"तारीख तक",
       "all":"सभी",
       "viewreport":"रिपोर्ट देखें",
       "selectoperator":"ऑपरेटर का चयन करें",
       "operator":"ऑपरेटर",
       "machinename":"मशीन का नाम",
       "shifttime":"शिफ्ट समय",
       "shift":"खिसक जाना",
       "operatorname":"ऑपरेटर का नाम",
       "alarmtime":"अलार्म समय",
       "alarmmessage":"अलार्म संदेश",
       "selectshift":"शिफ्ट का चयन करें",
       "alarmnumber":"अलार्म नंबर",
       "report":"रिपोर्ट",
       "split":"विभाजित करें",
       "jobdescription":"नौकरी का विवरण",
       "programnumber":"कार्यक्रम संख्या",

        "loadingandunloadingtime":"लोडिंग और अनलोडिंग समय",
        "idletime":"निष्क्रिय समय",
        "totaldowntime":"कुल डाउन टाइम",
        "actualrunning":"वास्तविक चल रहा है",
        "actualworkinghours":"वास्तविक कामकाजी घंटों",
        "notificationsettings":"अधिसूचना सेटिंग",
        "timeintervel":"समय अंतराल",
        "reason":"कारण",
        "deviceip":"युक्ति आईपी",
        "enable/disablenotification":"अधिसूचना सक्षम / अक्षम करें",
        "select":"चुनते हैं",
        "machineregistration":"मशीन पंजीकरण",
        "controllermodelnumber":"नियंत्रक मॉडल संख्या",
        "machinetype":"मशीन की तरह",
        "machineserialnumber":"मशीन धारावाहिक संख्या",
        "unit":"इकाई",
        "unit1":"इकाई1",
         "unit2":"इकाई2",
         "unit3":"इकाई3",
         "unit4":"इकाई4",
         "unit5":"इकाई5",
         "selectunit":"इकाई का चयन करें",
         "save":"बचाना",
         "cancel":"रद्द करना",
         "close":"बंद करे",
         "model":"आदर्श",
         "serialnumber":"क्रमांक",
         "controller":"नियंत्रक",
         "ip":"आईपी",
         "internetstatus":"इंटरनेट की स्थिति",
        "ethernetstatus":"ईथरनेट की स्थिति",
        "status":"स्थिति",
        "shiftregistration":"स्थानांतरण शिफ्ट",
        "daystarttime":"दिन शुरू करने का समय",
        "numberofshift":"शिफ्ट की संख्या",
        "shifttransactionregistration":"स्थानांतरण लेनदेन पंजीकरण",
        "workingtime":"काम का समय",
        "shiftstarttime":"शिफ्ट शुरू करने का समय",
        "shiftendtime":"शिफ्ट अंत समय",
        "action":"कार्य",
        "shiftnumber":"शिफ्ट संख्या",
        "endtime":"अंतिम समय",
        "number":"संख्या",
        "registrationcompleted":"पंजीकरण पूरा हो गया",
        "clientregistration":"ग्राहक पंजीकरण",
        "clientname":"ग्राहक का नाम",
        "emailid":"ईमेल आईडी",
        "mobilenumber":"मोबाइल नंबर",
        "required":"अपेक्षित",
        "name":"नाम",
        "operatorregistration":"ऑपरेटर पंजीकरण",
      "operatorname":"ऑपरेटर का नाम",
      "others":"अन्य लोग",
      "created":"बनाया था",
      "from-todate":"आज से",
      "userregistration":"उपयोगकर्ता का पंजीकरण",
      "role":"भूमिका",
      "firstname":"पहला नाम",
      "lastname":"अंतिम नाम",
      "newuserregistration":"नया उपयोगकर्ता पंजीकरण",
      "selectrole":"भूमिका का चयन करें",
      "userrole":"उपयोगकर्ता भूमिका",
      "remarks":"टिप्पणियों",
      "edituserregistration":"उपयोगकर्ता पंजीकरण संपादित करें",
      "notvalidemailid":"मान्य ईमेल आईडी नहीं",
      "lastupdatedtime":"अंतिम अद्यतन समय",
      "downtimedetails":"नीचे समय विवरण",
      "possibleload&unloadtime":"संभव लोड और अनलोडटाइम",
      "total":"कुल",
      "jobid":"नौकरी आईडी",
      "partscount":"भागों गिनती है",
      "rejects":"को खारिज कर दिया",
      "rework":"फिर से काम",
      "inspection":"निरीक्षण",
      "remainingparts":"शेष भागों",
      "partsdelivered":"भागों वितरित",
      "stopping":"रोक",
      "remaining":"शेष",
      "graphicalrepresentation":"सचित्र प्रदर्शन",
      "selectmachinename":"मशीन का नाम चुनें",
      "selectdate":"तारीख़ चुनें",
      "parts":"भागों",
      "jobregistration":"नौकरी पंजीकरण",
      "partname":"भाग का नाम",
      "partnumber":"भाग संख्या",
      "orderquantity":"आदेश की मात्रा",
      "jobstartdate":"नौकरी की शुरुआत की तारीख",
      "jobenddate":"नौकरी की समाप्ति तिथि",
      "quantity":"मात्रा",
      "machineip":"मशीन आईपी",
      "startdate":"आरंभ करने की तिथि",
      "enddate":"अंतिम तिथि",
      "note:pleaseregisteroperationsundertheactionstabforeachjob":
      "नोट: कृपया प्रत्येक नौकरी के लिए क्रिया टैब के तहत संचालन पंजीकृत करें",
      "companyname":"कंपनी का नाम",
      "addressline1":"पता पंक्ति1",
      "addressline2":"पता पंक्ति2",
      "aboutcompany":"कम्पनी के बारे में",
      "city":"शहर",
      "country":"देश",
      "state":"राज्य",
      "pincode":"पिन कोड",
      "agreethetermsandpolicy":"नियम और नीति से सहमत हैं",
      "alreadyhaveanaccount":"क्या आपके पास पहले से एक खाता मौजूद है",
      "register":"रजिस्टर",
      "registertocontinuewith":"जारी रखने के लिए रजिस्टर करें Yantra24x7",
      "copyright":"कॉपीराइट",
      "allrightsreserved":"सर्वाधिकार सुरक्षित",
      "privacypolicy":"गोपनीयता नीति",
      "terms&conditions":"नियम एवं शर्तें",
      "edituserprofile":"उपयोगकर्ता प्रोफ़ाइल संपादित करें",
      "recentalarms":"हालिया अलार्म",
      "details":"विवरण",
      "partscountdetails":"भागों गिनती है विवरण",
       "datacollection":"datacollection",
       "question1":"CNC मशीनों से डेटा किस मोड से पुनप्रापित कर सकते हे",
       "answer1":"ईथरनेट और RS 232 मोड से डेटा पुनप्रापित  कर सकता हे|",
       "question2":"CNC मशीन से डेटा पुनप्रापित करने केलिए कितने हार्डवेयर  डिवाइस की आवश्यकता हे",
       "answer2":"सिर्फ एक हार्डवेयर डिवाइस से दस मशीनों ईथरनेट मोड से कनेक्ट कर सकता हे |",
       "question3":"कंप्यूटर पर जहां डेटा प्रविष्ट स्क्रीन का उपयोग किया जात्ता हे वहां इंटरनेट की आवश्यकता हे",
       "answer3":"हां| अनुप्रयोग की स्थापना केलिए इंटरनेट पहुंच की आवश्यकता हे|",
       "question4":"CNC मशीनों सीधे इंटरनेट से जुड़े रहे हे ",
       "answer4":"नहीं मशीनों में हार्डवेयर डिवाइस के साथ स्विच का उपयोग करता हे |इसलिए  इंटरनेट की सीधी पहुँच की आवश्यकता नहीं हे |",
       "question5":"क्या होगा अगर मेरे पास पुराने मशीनों हे सीरियल पोर्ट ",
       "answer5":"कोई बाथ नहीं |yantra24x7 हमारे लिए एक कम लागत हार्डवेयर डिवाइस प्रदान करता हे ,उससे डेटा इक्कट्ठा करने केलिए प्रत्येक मशीनों से कनेक्ट करने केलिए आसान हे | ",
       "question6":"Down time कारणों को प्रवेश करने केलिए कोई तरह हे ",
       "answer6":"हां|yantra24x7 ने उपयोगकर्ता परिभाषित Down time कारणों को प्रवेश करने केलिए PC और टेबलेट पर डेटा प्रविषिष्ट स्क्रीन का उपयोग आसान कर देता हे |",
       "question7":"मशीन का एक टुकड़ा से दूसरे के लिए लाइसेंस ले जा सकते हे ",
       "answer7":"हां |आप मशीन से लाइसेंस ip विम्यास पर आधारित मशीन से स्थानातिरंथ करने के लिए स्वतंत्र हे | ",
       "question8":"मैं एक संयंत्र से दूसरे केलिए लाइसेंस ले जा सकते हे ",
       "answer8":"हां |जब तक संयंत्र एक ही खाते के अन्दर हे तो लाइसेंस उपकरणों के किसी फी टुकड़े करने केलिए ले जाया जा सकता हे|",
       "question9":"लाइसेंस बढ़ाया जा सकता हे या आसानी से कम कर सकते हो ",
       "question10":"एक समय में कितने लोग रिपोर्ट चला सकते हे ",
       "question11":"क्या में अपनी सुविधा के बाहर से रिपोर्ट तक पहुंच सकता हे ",
       "answer11":"हां |जब तक आप इंटरनेट पहुंच हे ,रिपोर्ट कहीं से फी चलाया जा सकता हे |",
       "question12":"CNC मशीनों की स्थिति एक फ़ोन से देखा जा सकता हे ",
       "answer12":"हां| फ़ोन और टेबलेट केलिए मोबाइल app एप्पल ios और google android दोनों केलिए उपलब्थ हे |",
       "question13":"CNC मशीनों की स्थिति एक PC से देख जा सकता हे ",
       "answer13":"हां डेटा PC से फी निगरानी की जा सकती हे |",
       "question14":"क्या क्या रिपोर्ट में देख सकता हूँ ",
       "answer14":"आप शिफ्ट वार,ऑपरेटर वार,घंटा वार,कार्यक्रम सख्या वार के रिपोर्ट देख सकता हे |",
       "question15":"क्या में मशीन उपयोग दिनांक वार देख सकते हे ",
       "answer15":"हम दिनांक वार और महीने वार मशीन उपयोग देख कर सकते हो|",
       "question16":"क्या में चक्र समय और भागों की गिनती की निगरानी कर सकते हे |",
       "answer16":"हां आप मशीन स्थिति के साथं चक्र समय और भागों गिनती की निगरानी कर सकते हे |",
       "question17":"क्या मेरा डेटा सुरक्षित हे ",
       "answer17":"हां,सफी डेटा सुरक्षित हे और cloud को ट्रांसमिट करता हे |",
       "question18":"आप मेरी व्यतिगत जानकारी बेच देंगे और किसी को देगा",
       "answer18":"किसी फी परितस्थिति में कभी नहीं |",
       "question19":"क्या में डेटा के एक प्रतिलिपि प्रप्थ कर सकते हूँ ",
       "question20":"",
       "answer20":"",
       "question21":"",
       "answer21":"",

       

     "doyouwanttodelete":"क्या आप हटाना चाहते हैं",
      "theusernameorpasswordisincorrect":"यूजरनेम या पासवर्ड गलत है",
      "pleaseentercorrectemailorphonenumber":"कृपया सही ईमेल या फोननंबर दर्ज करें",
      "checkyouremailandresetyourpassword":"अपना ईमेल जांचें और अपना पासवर्ड रीसेट करें",
      "pleaseselectoperator":"कृपया ऑपरेटर का चयन करें",
      "pleaseselectmachine":"कृपया मशीन का चयन करें",
      "breaktimedetails":"ब्रेक टाइम विवरण",
      "breakstarttime":"ब्रेक स्टार्ट टाइम",
      "breakendtime":"अंत समय तोड़ो",
      "breaktimeregistration":"ब्रेक टाइम पंजीकरण",
      "areyousurewanttologout":"क्या आप निश्चित रूप से लॉगआउट करना चाहते हैं?",
      "thankyouforregistering":"Yantra24X7 के साथ पंजीकरण के लिए धन्यवाद",
      "required":"अपेक्षित",
      "notvalidemailid":"वैध ईमेल नहीं है",
      "onlynumbersallowedmaximum10numbers":"केवल संख्या अनुमत, अधिकतम 10 संख्याएं",
      "send":"भेजना",
      "date":"दिनांक",
      "servoload":"इमदादी भार",
      "servotemp":"इमदादी मोटर तापमान",
      "machinestatus":"मशीन की स्थिति",
      "jobname":"नौकरी नाम",
      "currentstatus":"वर्तमान स्थिति",
      "lastcycle":"अंतिम चक्र",
      "run":"रन",
      "partsproduct":"भागों के उत्पाद",
      "spindle speed":"तकला गति",
      "cycletime":"चक्र चार्ट",
      "cyclestartchart":"चक्र शुरू चार्ट",
      "charts":"चार्ट",
      "allshiftchart":"सभी शिफ्ट चार्ट",
      "setting":"सेटिंग",
      "demo":"डेमो",
      "lastcuttingtime":"अंतिम काट समय",
      "powerstatus":"बिजली की स्थिति",
      "overallalarmhistory":"कुल मिलाकर अलार्म इतिहास",
      "datetime":"दिनांक समय",
      "cyclestarttostart":"चक्र शुरू करने के लिए शुरू करें",
      "yesterday":"बिता कल",
      "thisweek":"इस सप्ताह",
      "lastweek":"पिछले सप्ताह",
      "thismonth":"इस महीने",
      "lastmonth":"पिछले महीने",
      "lastcycle":"अंतिम चक्र",
      "machineutilized":"मशीन का उपयोग किया",
      "shiftutilized":"शिफ्ट का उपयोग किया",
      "nonutilized":"उपयोग नहीं किया गया",
      "target":"लक्ष्य",
      "actual":"वास्तविक",
      "excess":"अधिक",
      "shortfall":"कमी",
      "nos":"संख्या",
      "branch":"डाली",
      "spindle":"धुरा",
      "hmi":"जमीटरमैं",
      "cyclestopchart":"साइकिल स्टॉप चार्ट",
      "oee":"सूट",

      "registrationcompleted":"पंजीकरण पूरा हो गया",
      "registrationfailed":"पंजीकरण विफल",
      "updatedsuccessfully":"अद्यतन सफलतापूर्ण हो गया",
      "updationfailed":"अद्यतन विफल",
      "deletesuccessfully":"सफलतापूर्वक हटाएं",
      "deletefailed":"हटाएं विफल",




}

    $translateProvider.translations('en',en_translations);
    
    $translateProvider.translations('ta',ta_translations);

    $translateProvider.translations('hi',hi_translations);

    $translateProvider.translations('ka',ka_translations);

  }])



  // run function for session handing

  .run(function ($rootScope, $location,$http,$translate,) {
  $http.defaults.headers.common.Authorization = 'Bearer '+localStorage.getItem("access_token");
//alert(localStorage.getItem("access_token"));

    if(localStorage.getItem("chLanguage") != undefined )
    {
      $translate.use(localStorage.getItem("chLanguage"))
      //alert(localStorage.getItem("chLanguage"));
    }else
    {
      $translate.use('en');
      

    }


  //  var authcode=sessionStorage.getItem("authkey");
  //  if(authcode !=null){
  //   $http.defaults.headers.common['Authorization'] = authcode;    
  //  }else{
  //   $location.path('/login')
  //  }
    $rootScope.$on("$locationChangeStart", function (event, next, current) {
      // handle route changes  
      $rootScope.currentPath = $location.path();
      $rootScope.sidepath=$location.path().replace("/","")
      $rootScope.getId = localStorage.getItem("tenant_id");
      $rootScope.role_name = localStorage.getItem("role_name");

      //console.log($rootScope.currentPath)
     if (localStorage.getItem("tenant_id") == null && $rootScope.currentPath != '/registration'  && $rootScope.currentPath != '/wifi' && $rootScope.currentPath != '/machinenew' && $rootScope.currentPath != '/oee' && $rootScope.currentPath != '/shiftpart' && $rootScope.currentPath != '/cyclestop' && $rootScope.currentPath != '/hmi' && $rootScope.currentPath != '/dashboardnew' && $rootScope.currentPath != '/faq_question' && $rootScope.currentPath != '/alldetails' && $rootScope.currentPath != '/companydetails' && $rootScope.currentPath != '/frontpage' && $rootScope.currentPath != '/compare' && $rootScope.currentPath != '/chart' && $rootScope.currentPath != '/lmw' && $rootScope.currentPath != '/adminuser' && $rootScope.currentPath != '/device' && $rootScope.currentPath != '/setting'  && $rootScope.currentPath != '/tenant' && $rootScope.currentPath != '/device_registration' && $rootScope.currentPath != '/changepassword' && $rootScope.currentPath != '/statuschart') {
        $location.path('/login')
        return;
      }
       if ($rootScope.currentPath == '/machine_registration' || $rootScope.currentPath== '/shift_registration'  || $rootScope.currentPath == '/client' || $rootScope.currentPath == '/job_registration' || $rootScope.currentPath== '/usermanagement' || $rootScope.currentPath== '/operator_masters' || $rootScope.currentPath == '/operator_allocation_masters') {
      
        $rootScope.masterShow = true;
       
      }else{
        $rootScope.masterShow = false;
      }
      

    });
    if ($rootScope.currentPath == '/alternative' || $rootScope.currentPath== '/view2'  || $rootScope.currentPath == '/download' || $rootScope.currentPath == '/codecompare' || $rootScope.currentPath== '/reason' ) {
      
      $rootScope.fileShow = true;
     
    }else{
      $rootScope.fileShow = false;
    }
  })

 
   // common controller
  .controller('appctrl', ['$scope', '$http', '$location', '$rootScope', '$window', '$templateCache','$translate',
    function ($scope, $http, $location, $rootScope, $window, $templateCache,$translate) {

     $rootScope.masterShow = false;
     $rootScope.fileShow = false;


      $scope.currentPath = $location.path();

        
         //$rootScope.api_url = "https://app.yantra24x7.com/";
        //$rootScope.api_url_report = "http://https://app.yantra24x7.com/";

        $rootScope.api_url = "http://192.168.0.237:4000/";
        $rootScope.api_url_report = "http://192.168.0.237:4000/";

        // $rootScope.api_url = "http://192.168.1.103:40010/";
        // $rootScope.api_url_report = "http://192.168.1.103:40010/";
       

      // $rootScope.api_url = "http://52.66.140.40/";
      // $rootScope.api_url_report = "http://52.66.140.40/";


     //alarm slide function
$scope.changeLanguage = function(language){

  localStorage.setItem("chLanguage", language);
  $scope.language = localStorage.getItem("chLanguage");
  console.log($scope.language);
  $translate.use($scope.language);
console.log($translate.use($scope.language));
                          }



      $rootScope.alarmClick = function () {
        $scope.myLoader = true;
        $http({
            method: 'GET',
            url: $rootScope.api_url + 'api/v1/machines/dashboard_status_1?tenant_id=' + $scope.tenant_id + '&type=Alarm'
          })
          .then(function (response) {
            $scope.AlarmDash = response.data;
            $scope.myLoader = false;
          })

      }

      $scope.const = function () {
        $scope.CurrentDate = new Date();
        $scope.tenant_id = localStorage.getItem("tenant_id");
        $scope.username = localStorage.getItem("username");
        $scope.lastname = localStorage.getItem("last_name");
        $scope.email = localStorage.getItem("email_id");
        $scope.roleforpage = localStorage.getItem("role_id");
        $rootScope.usertype_id=localStorage.getItem("usertype_id");
        $scope.useridforedit = localStorage.getItem("userid");
        $rootScope.role_Setup = localStorage.getItem("role_name");
        $scope.access_token = localStorage.getItem("access_token");
        $scope.role_id = localStorage.getItem("role_id");
        

        if( $rootScope.role_Setup != null){ 
        $rootScope.role_Setup =  $rootScope.role_Setup.toLowerCase();
        }

        $rootScope.chart_tenant_id = localStorage.getItem("tenant_id");
      
        if( $scope.useridforedit != null){ 
        $http({
            method: 'GET',
            url: $rootScope.api_url + 'api/v1/users/' + $scope.useridforedit
          })
          .then(function (response) {
            $rootScope.userbyid = response.data;
            $rootScope.tenant_nme = response.data.tenant;
             $rootScope.tents = $rootScope.tenant_nme.tenant_name;
              if($scope.useridforedit == 282 ){
                $rootScope.tents ="Altius Technology";
                
                 }
          })

          }
   
      }

      if (localStorage.getItem("username") != null) {
      $scope.const(); 
      }
      //logout function
      $scope.signout = function () {
        $templateCache.removeAll();
        localStorage.clear();
        $window.location = "/#!/login"
      }

      //side bar path redirect
      $scope.pageverification1 = function (url) {
        $scope.urls = url.substring(3);

        $location.path($scope.urls);
      }

      $scope.pageverification = function (url) {
        $scope.urls = url.substring(3);
        $location.path($scope.urls);
      }

$scope.password_ch = function(test){
  $scope.password = localStorage.getItem("change_pass");
if($scope.password == test){
  $scope.old_password = true;
}else{
  $scope.old_password = false;
}
 



}

        //dashboard user edit
      $scope.useredit = function () {

        $scope.profile_edit = angular.copy($rootScope.userbyid);
      }
      $scope.profile_edit = {
        id: null,
        first_name: "",
        last_name: "",
        email_id: "",
        password: "",
        phone_number: "",
        remarks: "",
        usertype_id: 1,
        approval_id: 1,
        role_id:   $scope.roleforpage,
        tenant_id: $scope.tenant_id
      };
    
      $scope.usrid = $scope.useridforedit;
      $scope.usereditForm = function () {

        // first_name: "f_name"
        // last_name: "l_name"
        // email_id: "ppt@gmail.com"
        // password: "ppt_yantra"
        // default: "ppt_yantra"
        // phone_number: "6541023781"
        // remarks: "vghkj"
        // usertype_id: 1
        // approval_id: null
        // tenant_id: "7"
        var profile_edit = {
          first_name: $scope.profile_edit.first_name,
          last_name: $scope.profile_edit.last_name,
          email_id: $scope.profile_edit.email_id,
          password: $scope.profile_edit.password,
          default: $scope.profile_edit.password,
          phone_number: $scope.profile_edit.phone_number,
          remarks: $scope.profile_edit.remarks,
          usertype_id: $scope.profile_edit.usertype_id,
          approval_id: $scope.profile_edit.approval_id,
          role_id:  $scope.role_id ,
          tenant_id: $scope.tenant_id
        };

         console.log($scope.profile_edit)
        $http
          ({
            method: 'put',
            url: $rootScope.api_url + 'api/v1/users/' + $scope.profile_edit.id,
            data: profile_edit
          })

          .success(function (data) {

            if (data) {
              localStorage.setItem("username", data.first_name);
              $scope.username = data.first_name;
              alert("Updated Successfully");
              $window.location = "/#!/login"
            } else {
              alert('Updation Failed');
            }

          });

      }
    }
  ])
  

  .service('APIInterceptor', function($rootScope,$window) {
    var service = this;
    service.request = function(config) {
 
        return config;
    };
    service.responseError = function(response) {
        if (response.status === 401) {
                 $window.location = "/#!/login"

 }
        return response;
    };
})
 
  .directive('ngConfirmClick', [
    function () {
      return {
        link: function (scope, element, attr) {
          var msg = attr.ngConfirmClick; // || "Are you sure?";
          var clickAction = attr.confirmedClick;
          element.bind('click', function (event) {
            if (window.confirm(msg)) {
              scope.$eval(clickAction)
            }
          });
        }
      };
    }
  ]);
