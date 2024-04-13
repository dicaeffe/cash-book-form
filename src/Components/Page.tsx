import { useEffect, useState } from 'react';
import PaymentAmount from './Payment/PaymentAmount';
import PaymentChannel from './Payment/PaymentChannel';
import Text from './BrickUtils/Text';
import PaymentCategory from './Payment/PaymentCategory';
import PreConfigPayments from './Payment/PreConfigPayments';
import MyPreConfig from './BrickUtils/MyPreConfig';
import SendButton from './BrickUtils/SendButton';
import PaymentDate from './Payment/PaymentDate';

function Page() {
  
    // Form Data
    //const [alert, setAlert] = useState({});//{ severity: "info", text: "Compila con attenzione" }
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

    // def come cambiare lo stato
    useEffect(() => {
        setDescription(() => {return description});
        setAmount(() => {return amount});
    }, [amount, setDescription]);// Dipendenza dello useEffect: monitorerà anche questa variabile

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
            <PaymentDate defaultValue={date} onChange={setDate} />
            <PreConfigPayments defaultValue={formData} onChange={preConfig} />
            <Text defaultValue={description} onChange={setDescription} label="Descrizione" id="descrizione-text" />
            <PaymentAmount defaultValue={amount} onChange={setAmount} />
            <PaymentCategory defaultValue={category} onChange={setCategory} />
            <PaymentChannel defaultValue={outgoingFund} onChange={setOutgoingFund} />
            <PaymentChannel defaultValue={incomingFund} onChange={setIncomingFund} />

            {"date = "+formData[0].date.toISOString()}<br/>
            {"amount = "+formData[0].amount +"€"}<br/>
            {"category = "+formData[0].category}<br/>
            {"outgoingFund = "+formData[0].outgoingFund}<br/>
            {"incomingFund = "+formData[0].incomingFund}<br/>
            {"description = "+formData[0].description}<br/>
            
            <SendButton body={formData} />
        </div>
    );
}

export default Page