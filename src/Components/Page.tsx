import { useState } from 'react';
import MyDatePicker from './MyDatePicker';
import PaymentAmount from './Payment/PaymentAmount';
import { TextField } from '@mui/material';
import PaymentChannel from './Payment/PaymentChannel';
import Text from './Text';
import PaymentCategory from './Payment/PaymentCategory';
import PreConfigPayments from './Payment/PreConfigPayments';
import MyPreConfig from './BrickUtils/MyPreConfig';

function Page() {
    //const helperDate = "Quando?";
    //const helperCategory = "Quale categoria?";
    const helperDescription = "Descrivi la movimentazione: a cosa è dovuta?";
    //const helperOutgoingFund = "Da dovel i prendi?";
    //const helperIncomingFund = "Dove li mandi?";
    const helperAmount = "Inserisci l'importo totale";
    const checkButtonText = "Verifica";
    const sendButtonText = "Invia!";
  
    // Form Data
    const [alert, setAlert] = useState({});//{ severity: "info", text: "Compila con attenzione" }
    const [date, setDate] = useState(new Date());
    const [category, setCategory] = useState("ciboUfficio");
    const [description, setDescription] = useState("");
    const [outgoingFund, setOutgoingFund] = useState("ccWebank");
    const [incomingFund, setIncomingFund] = useState("out");
    const [amount, setAmount] = useState("");

    const formData = [
        new MyPreConfig(
            date,
            category,
            description,
            outgoingFund,
            incomingFund,
            amount
          )
    ];
    const preConfig = (selectedValues:MyPreConfig[]) => {
        console.info(selectedValues);
        const selectedValue = selectedValues[0];

		/*if (selectedValue.date) {
			setDate(selectedValue.date)
		}*/
		if (selectedValue.category) {
			setCategory(selectedValue.category)
		}
		if (selectedValue.description) {
			setDescription(selectedValue.description)
		}
		if (selectedValue.outgoingFund) {
			setOutgoingFund(selectedValue.outgoingFund)
		}
		if (selectedValue.incomingFund) {
			setIncomingFund(selectedValue.incomingFund)
		}
		if (selectedValue.amount) {
			setAmount(selectedValue.amount)
		}
    }
    return (
        <div>
            <MyDatePicker defaultValue={date} onChange={setDate} label={'Data di esecuzione'} />
            <PaymentCategory defaultValue={category} onChange={setCategory} />
            <PaymentAmount defaultValue={amount} onChange={setAmount} helperText={helperAmount} />
            <PreConfigPayments defaultValue={formData} onChange={preConfig} />
            <PaymentChannel defaultValue={outgoingFund} onChange={setOutgoingFund} />
            <PaymentChannel defaultValue={incomingFund} onChange={setIncomingFund} />
            <Text defaultValue={description} onChange={setDescription} label="Descrizione" id="descrizione-text" helperText={helperDescription} />
        
        
            {"date = "+formData[0].date.toISOString()}<br/>
            {"amount = "+formData[0].amount +"€"}<br/>
            {"category = "+formData[0].category}<br/>
            {"outgoingFund = "+formData[0].outgoingFund}<br/>
            {"incomingFund = "+formData[0].incomingFund}<br/>
            {"description = "+formData[0].description}<br/>
            
        </div>
    );
}

export default Page