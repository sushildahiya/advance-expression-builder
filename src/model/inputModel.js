/**
 * Defined all the input fields
 */
const fields = [{ 
    key:"application.gender", 
    label:"Gender", 
    type:"select", 
    options:["male","female","others"], 
    operators:["in","nin"],
    value_suffix: ""
},
{ 
    key:"applicant.age", 
    label:"Age", 
    type:"number", 
    operators:[">",">=","<","<="], 
    value_suffix:"" 
},
{ 
    key:"applicant.current_address_ownership", 
    label:"Current Address Owernship", 
    type:"multi_select", 
    options:["rented","owned"], 
    operators:["in","nin"],
    value_suffix:"" 
},
{ 
    key:"business.business_type", 
    label:"Business", 
    type:"multi_select", 
    operators:["in","nin"], 
    options:["proprietorship","llp","partnership","private_limited","limited","individual"],
    value_suffix :""
},
{ 
    key:"busniess.overall_vintage", 
    label:"Overall Business Vintage", 
    type:"number", 
    operators:[">",">=","<","<="], 
    value_suffix:"months" 
},
{ 
    key:"business.vintage_with_partner_in_months", 
    label:"Vintage with Partner", 
    type:"number", 
    operators:[">",">=","<","<="], 
    value_suffix:"months" 
},
{ 
    key:"business.current_address_ownership", 
    label:"Current Address Ownership", 
    type:"multi_select", 
    operators:["rented","owned"], 
    options:["in","nin"] ,
    value_suffix:""
},
{ 
    key:"business.brand", 
    label:"Brand", 
    type:"multi_select", 
    options:["apple","samsung","nothing"], 
    operators:["in","nin"],
    value_suffix:"" 
},
{ 
    key:"matrix_data.business_authenticity", 
    label:"Business Authenticity", 
    type:"multi_select",
    options:["R","Y","G"], 
    operators:["in","nin"], 
    value_suffix:""
},
{
    "key": "matrix_data.business_authenticity.business_type_match",
    "label": "Business Type Match",
    "type": "multi_select",
    "options": ["R", "Y", "G"],
    "operators": ["in", "nin"]
},
{
    "key": "matrix_data.business_authenticity.address_match",
    "label": "Business Address Match",
    "type": "multi_select",
    "options": ["R", "Y", "G"],
    "operators": ["in", "nin"]
},
{
    "key": "matrix_data.business_authenticity.incorporation_year_match",
    "label": "Business Incorporation Year Match",
    "type": "multi_select",
    "options": ["R", "Y", "G"],
    "operators": ["in", "nin"]
},
{
    "key": "matrix_data.business_person_check",
    "label": "Business Person Check",
    "type": "multi_select",
    "options": ["R", "Y", "G"],
    "operators": ["in", "nin"]
},
{
    "key": "matrix_data.business_person_check.name_match",
    "label": "Business Person Name Match",
    "type": "multi_select",
    "options": ["R", "Y", "G"],
    "operators": ["in", "nin"]
},
{
    "key": "matrix_data.business_person_check.gst_pan_link_match",
    "label": "Business GST PAN Link",
    "type": "multi_select",
    "options": ["R", "Y", "G"],
    "operators": ["in", "nin"]
},
{
    "key": "matrix_data.person_authenticity",
    "label": "Person Authenticity",
    "type": "multi_select",
    "options": ["R", "Y", "G"],
    "operators": ["in", "nin"]
},
{
    "key": "matrix_data.person_authenticity.name_match",
    "label": "Person Name Match",
    "type": "multi_select",
    "options": ["R", "Y", "G"],
    "operators": ["in", "nin"]
},
{
    "key": "matrix_data.person_authenticity.father_name_match",
    "label": "Person's Father Name Match",
    "type": "multi_select",
    "options": ["R", "Y", "G"],
    "operators": ["in", "nin"]
},
{
    "key": "matrix_data.person_authenticity.address_match",
    "label": "Person Address Match",
    "type": "multi_select",
    "options": ["R", "Y", "G"],
    "operators": ["in", "nin"]
},
{
    "key": "matrix_data.person_authenticity.dob_match",
    "label": "Person DOB Match",
    "type": "multi_select",
    "options": ["R", "Y", "G"],
    "operators": ["in", "nin"]
},
{
    "key": "matrix_data.bank_account_authenticity.name_match",
    "label": "Bank Name Match",
    "type": "multi_select",
    "options": ["R", "Y", "G"],
    "operators": ["in", "nin"]
},
{
    "key": "{applicant_type}.bureau-score", //applicant_type can be business or applicant
    "label": "Bureau Score",
    "type": "number",
    "operators": ["=", ">", ">=", "<", "<="]
},
{
    "key": "{applicant_type}.bureau-accounts", //applicant_type can be business or applicant
    "label": "Loan Accounts",
    "type": "number",
    "operators": ["=", ">", ">=", "<", "<="],
    "filters": [
        {
            "key": "period",
            "label": "Period",
            "type": "period",
				    "operators": [">", ">=", "<", "<="],
            "period_types": ["months", "years"]
        },
				{
            "key": "account_date",
            "label": "Account Date",
            "type": "select",
            "choices": ["date_open", "date_close"]
        },
				{
            "key": "report_date",
            "label": "Report Date",
            "type": "select",
            "choices": ["reported_date", "current_date"]
        },
				{
            "key": "vintage",
            "label": "with vintage",
            "type": "vintage",
				    "operators": [">", ">=", "<", "<="],
            "period_types": ["months", "years"]
        },
       
        {
            "key": "aggregation",
            "label": "Aggregation",
            "type": "select",
            "choices": ["sum", "average", "max", "min"],
            "is_required": true
        },
        {
            "key": "field_name",
            "label": "Field Name",
            "type": "select",
            "choices": ["outstanding_amount", "overdue_amount", "sanctioned_amount", "loan_count"],
            "is_required": true
        }
    ]
},
{
    "key": "{applicant_type}.bureau-enquiries",//applicant_type can be business or applicant
    "label": "Enquiries",
    "type": "number",
    "operators": ["=", ">", ">=", "<", "<="],
    "filters": [
        {
            "key": "period",
            "label": "in last",
            "type": "period",
				    "operators": ["=", ">", ">=", "<", "<=", "!="],
            "period_types": ["months", "years"]
        },
				{
            "key": "report_date",
            "label": "Report Date",
            "type": "select",
            "choices": ["reported_date", "current_date"]
        }
    ]
},
{
    "key": "{applicant_type}.bureau-dpds", //applicant_type can be business or applicant
    "label": "DPDs",
    "type": "number",
    "operators": ["=", ">", ">=", "<", "<="],
    "filters": [
        {
            "key": "period",
            "label": "Period",
            "type": "period",
				    "operators": [">", ">=", "<", "<="],
            "period_types": ["months", "years"]
        },
				{
            "key": "account_date",
            "label": "Account Date",
            "type": "select",
            "choices": ["date_open", "date_close"]
        },
				{
            "key": "report_date",
            "label": "Report Date",
            "type": "select",
            "choices": ["reported_date", "current_date"]
        },
				{
            "key": "vintage",
            "label": "with vintage",
            "type": "vintage",
				    "operators": [">", ">=", "<", "<="],
            "period_types": ["months", "years"]
        },        
				{
            "key": "sanctioned_amount",
            "label": "Sanctioned Amount",
            "type": "number",
            "operators": ["=", ">", ">=", "<", "<=", "!="],
						"value_suffix": ""
        },
       {
            "key": "aggregation",
            "label": "Aggregation",
            "type": "select",
            "choices": ["max", "min"],
            "is_required": true
        },
        
        
    
    ]
},
{
    "key": "{applicant_type}.banking-bounces",
    "label": "Bank Bounces",
    "type": "number",
    "operators": [">", ">=", "<", "<="],
    "filters": [

        {
            "key": "period",
            "label": "in last",
            "type": "period",
                    "operators": [">", ">=", "<", "<="],
            "period_types": ["months", "years"]
        },
        {
            "key": "mode_type",
            "label": "Mode Type",
            "type": "multi_select",
            "operators": ["in", "nin"],
            "choices": ["cheque", "ach"]
        }
    ]
},
{
    "key": "{applicant_type}.banking-abb",
    "label": "Bank ABB",
    "type": "number",
    "operators": ["=", ">", ">=", "<", "<="],
    "filters": [
        {
            "key": "period",
            "label": "in last",
            "type": "period",
                    "operators": [">", ">=", "<", "<="],
            "period_types": ["months", "years"]
        },
        {
            "key": "aggregation",
            "label": "Aggregation",
            "type": "select",
            "choices": ["average", "max", "min"]
        },
        {
            "key": "field_name",
            "label": "Field Name",
            "type": "select",
            "choices": ["daily_average", "weekly_average"]
        }
    ]
},
{
    "key": "{applicant_type}.banking-credits", //applicant_type can be business or applicant
    "label": "Bank Credits",
    "type": "number",
    "operators": [">", ">=", "<", "<="],
    "filters": [
        {
            "key": "period",
            "label": "in last",
            "type": "period",
                    "operators": [">", ">=", "<", "<="],
            "period_types": ["months", "years"]
        },
        {
            "key": "aggregation",
            "label": "Aggregation",
            "type": "select",
            "choices": ["sum", "average", "max", "min"]
        }
    ]
},
{
    "key": "{applicant_type}.banking-debits",
    "label": "Bank Debits",
    "type": "number",
    "operators": [">", ">=", "<", "<="],
    "filters": [
        {
            "key": "period",
            "label": "in last",
            "type": "period",
                    "operators": [">", ">=", "<", "<="],
            "period_types": ["months", "years"]
        },
        {
            "key": "aggregation",
            "label": "Aggregation",
            "type": "select",
            "choices": ["sum", "average", "max", "min"]
        }
    ]
}

];

export default fields;
