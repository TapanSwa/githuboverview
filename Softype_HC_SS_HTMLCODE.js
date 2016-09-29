/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       04 Aug 2016     Chetan
 *
 */

/**
 * @param {nlobjRequest} request Request object
 * @param {nlobjResponse} response Response object
 * @returns {Void} Any output is written via response object
 */
function suitelet(request, response){

var html='';


html+='<html>';
html+='<head>';
html+='<title>Vento</title>';
html+='<meta charset="UTF-8">';
html+='<meta name="viewport" content="width=device-width, initial-scale=1.0">';
html+= '<style>';
html+= '	            table{';
html+= '            width:100%;';
html+= '  	                border-collapse:collapse;';
html+= '  	                table-layout: fixed;}'; 
	            
html+= '  	            tr,td,th{';
html+= '  	                border:1px solid black;';
html+= '  	                text-align:left;';
html+= '  	                border-collapse: collapse;';
html+= '  	            } ';
	           
	            
html+= '              .border-less{border:0px !important;}';
	            
html+= '  	            .border-less td,.border-less tr,.border-less th{';
html+= '  	                border:0px;';
html+= '  	            }';
	            
html+= '              .border-bottom td,.border-bottom th,.border-bottom tr{';
html+= '                  border-bottom:1px solid black;';
html+= '              }';
	            
html+= '              .border-right td,.border-right tr,.border-right th{';
html+= '  	                border-right:1px solid black;';
html+= '  	            }';
	            
	            
	            
html+= '  	            .border-top td,.border-top th,.border-top tr{';
html+= '  	                border-top:1px solid black;';
html+= '              }';
	            
html+= '  	            .border-left td{';
html+= '  	                border-left:1px solid black;';
html+= '              }';
	                   
html+= '  	            .text-center{';
html+= '  	                text-align:center;';
html+= '  	            }';
	            
html+= '  	            .data{';
html+= '  	                height:200px;';
html+= '  	            }';
	            
html+= '  	            .container{width:500px;}';
	            
html+= '  	            .clearfix{clear:both;}';
	            
html+= '  	            #earning table tr td:last-child,#deduction table tr td:last-child{border-right:0px;}';
	            
html+= '  	            #earning table tr:first-child td:first-child{text-align:center;}';
	           
html+= '  	        </style>';
html+= '  	    </head>';
html+= '  	    <body>';
html+= '  				<div class="container">';
html+= '  	            <div>';
html+= '<div id="logo" style="float:left">';
html+= '  	                    <!-- Company Logo -->';
	html+= '  	                  <img src="infotech.jpg" alt="company logo">';
	                    
	                    
		html+= '  	                </div>';
			html+= '  	                <div id="header-description" style="float:right">';
			html+= '  	                    <p>Ventus Infotech Pvt.Ltd <br>';
				html+= '  	                        21 Morvi House 2nd Floor<br>';
					html+= '  	                        28/30 Goa Street,Ballard Estate<br>Mumbai-400001';
						html+= '  	                    </p>';
	                    
						html+= '  						</div>';
						html+= '  	                <div class="clearfix"></div>';
							html+= '  	            </div>';
	            
html+= '              <div id="salary-slip">';
	                
html+= '  	                <table>';
html+= '                      <thead>';
html+= '  	                        <tr>';
html+= '  	                            <th>';
html+= '  	                                Employee Name:<br>';
html+= '                                  Month & year';
html+= '                              </th>';
html+= '  	                            <th>';
html+= '                                  <table class="border-less">';
html+= '  	                                    <tr class="border-bottom">';
html+= '  	                                        <th>Designation</th>';                                      
html+= '                                      </tr>';
html+= '  	                                    <tr class="border-bottom">';
html+= '                                          <th>Department</th> ';                                     
html+= '  	                                    </tr>';
html+= '  	                                    <tr class="">';
html+= '  	                                        <th>Employee PF No</th>';                                   
html+= '  	                                    </tr>';

html+= '  	                                </table>';
html+= '  	                            </th>';
	                            
html+= '  	                        </tr>';
html+= '  	                        <tr>';
html+= '  	                            <th class="text-center">Earning</th>';
html+= '  	                            <th class="text-center">Deduction</th>';
html+= '  	                        </tr>';
html+= '  	                    </thead>';
	                    
html+= '  	                    <tbody>';
	                        
html+= '  	                        <tr>';
html+= '  	                            <td id="earning">';
html+= '                                 <table class="border-less">';
html+= '  	                                    <tr class="border-bottom border-right data">';
html+= '  	                                        <td >';
html+= '  	                                            Pay';
html+= '  	                                        </td>';
html+= '  	                                        <td ></td>';
html+= '  	                                        <td></td>';
html+= '  	                                    </tr>';
html+= '  	                                    <tr class="border-right">';
html+= '  	                                        <td class="text-center border-right" colspan="2">Gross Pay</td>';
html+= '  	                                        <td class=""></td>';
html+= '  	                                    </tr>';
html+= '  	                                </table>';
	                                
html+= '  	                            </td>';
html+= '  	                            <td id="deduction">';
html+= ' <table class="border-less">';
html+= '  	                                    <tr class="border-bottom border-right data">';
html+= '  	                                        <td ></td>';
html+= '  	                                        <td ></td>';
	                                        
html+= '  	                                    </tr>';
	html+= '  	                                    <tr class="border-less border-right">';
		html+= '  	                                        <td >Net Payable</td>';
			html+= '  	                                        <td ></td>';
				html+= '  	                                    </tr>';
					html+= '  	                           </table>';
	                                
	                                html+= '  	                            </td>';
	                            
	                            html+= '  	                        </tr>';
	                        html+= '  	                    </tbody>';
	                    html+= '  	                </table> '      ;
	                
	                html+= '  	            </div>';
	            
	            html+= '  	        </div>';
html+= '  	    </body>';
html+= '  	</html>'
	response.write(html);
  }

