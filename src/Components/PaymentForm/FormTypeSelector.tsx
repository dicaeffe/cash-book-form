import { Chip, Avatar, Card, Stack, Divider, CardContent } from '@mui/material';
import PaymentData from './Model/PaymentData';
import Transaction from './Model/Transaction';
import { useState } from 'react';
import PaymentDate from './Fields/PaymentDate';
import PaymentDescription from './Fields/PaymentDescription';
import PaymentCategory from './Fields/PaymentCategory';
import PaymentChannel from './Fields/PaymentChannel';
import PaymentAmount from './Fields/PaymentAmount';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Edenred from '/images/avatars/Edenred.png';
import SendButton from './BrickUtils/SendButton';

function FormTypeSelector() {
  const label = "FormTypeSelector"
  const [paymentData, setPaymentData] = useState(new PaymentData(new Date()));

  const values = [{
    key: 0,
    name: "Introiti",
    avatar: "I",
    value: new PaymentData(new Date(), "payroll", "", [
      new Transaction("out", "ccWebank", 0.00)
    ])
  }, {
    key: 1,
    name: "BP",
    avatar: "B",
    value: new PaymentData(new Date(), "ciboUfficio", "", [
      new Transaction("buoniPasto", "out", 16.00)
    ])
  }, {
    key: 2,
    name: "BP+Cred",
    avatar: "B+C",
    value: new PaymentData(new Date(), "ciboUfficio", "Pranzo da ", [
      new Transaction("buoniPasto", "out", 16.00),
      new Transaction("crediti", "out", 10.00)
    ])
  }, {
    key: 3,
    name: "BP2Cred",
    avatar: "B2c",
    value: new PaymentData(new Date(), "ciboUfficio", "Pranzo da ", [
      new Transaction("buoniPasto", "out", 16.00),
      new Transaction("buoniPasto", "crediti", 10.00)
    ])
  }, {
    key: 4,
    name: "BP2Cr-Cred",
    avatar: "B2cC",
    value: new PaymentData(new Date(), "ciboUfficio", "Pranzo da ", [
      new Transaction("buoniPasto", "out", 10.00),
      new Transaction("buoniPasto", "crediti", 6.00),
      new Transaction("crediti", "out", 10.00)
    ])
  }, {
    key: 5,
    name: "SpesaBP",
    avatar: Edenred,
    value: new PaymentData(new Date(), "spesaCasa", "Spesa da ", [
      new Transaction("buoniPasto", "out", 10.00),
      new Transaction("ccWebank", "out", 10.00)
    ])
  }, {
    key: 6,
    name: "SpesaBP+Ill",
    avatar: Edenred,
    value: new PaymentData(new Date(), "spesaCasa", "Spesa da ", [
      new Transaction("buoniPasto", "out", 10.00),
      new Transaction("ccIllimity", "out", 10.00)
    ])
  }, {
    key: 7,
    name: "Spesa",
    avatar: "S",
    value: new PaymentData(new Date(), "spesaCasa", "Spesa da ", [
      new Transaction("ccWebank", "out", 10.00)
    ])
  }
  ]

  const onFormChange = (newData: PaymentData) => {
    //if(selectedValues) setPaymentData(selectedValues => selectedValues);
    setPaymentData(newData);
    console.info("---------New Value of paymentData");
    console.info(newData);
    console.info(paymentData);
  }

  return (
    <div>
      <p>{label}</p>
      {values.map(v =>
        <Chip
          key={v.key}
          avatar={<Avatar alt={v.name} src={v.avatar} />}
          label={v.name}
          variant="outlined"
          color="secondary"
          onClick={() => {
            console.info('You clicked the Chip.');
            onFormChange(v.value)
          }} />
      )}
      <Divider orientation="horizontal" variant="middle" flexItem />
      <br />
      <PaymentCategory paymentData={paymentData} onChange={onFormChange} />
      <Divider orientation="horizontal" variant="middle" flexItem />
      <br />
      <PaymentDate paymentData={paymentData} onChange={onFormChange} />
      <PaymentDescription paymentData={paymentData} onChange={onFormChange} />
      <br />

      {paymentData.transactions?.map((t, index) => {
        console.log(t)
        return (
          <div key={index}>
            <Card>
              <CardContent color='primary'>
                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center" alignItems="center">
                  <PaymentChannel paymentData={paymentData} onChange={onFormChange} index={index} field={"outgoingFund"} />
                  <KeyboardDoubleArrowRightIcon />
                  <PaymentChannel paymentData={paymentData} onChange={onFormChange} index={index} field={"incomingFund"} />
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <PaymentAmount paymentData={paymentData} onChange={onFormChange} index={index} />
                </Stack>
              </CardContent>
            </Card>
            <br />
          </div>
        )
      })}
      <SendButton paymentData={paymentData} />
      <br />

      <Divider orientation="horizontal" variant="middle" flexItem />
      <strong>Riepilogo</strong><br />
      <table>
        <tr>
          <td><strong>Data</strong></td>
          <td>{paymentData.transactionDate.toISOString()}</td>
        </tr>
        <tr>
          <td><strong>Cat.</strong></td>
          <td>{paymentData.category}</td>
        </tr>
        <tr>
          <td><strong>Desc.</strong></td>
          <td>{paymentData.description}</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <table>
              {paymentData.transactions?.map((value, index) => {
                return (
                  <tr>
                    <td><strong>{index}</strong></td>
                    <td>{value.outgoingFund}</td>
                    <td>{"➡️"}</td>
                    <td>{value.incomingFund}</td>
                    <td>{value.amount + "€"}</td>
                  </tr>
                )
              })}
            </table>
          </td>
        </tr>
      </table>
      
      <Divider orientation="horizontal" variant="middle" flexItem />
    </div>
  )
}

export default FormTypeSelector