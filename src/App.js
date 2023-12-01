import {useState} from "react";

const App = () => {
    const glycerinDensity = 1.26
    const glycolDensity = 1.04

    const millilitersOfGlycerinPerNicotineMilligram = 0.039
    const millilitersOfGlycolPerNicotineMilligram = 0.017

    const onChangeHandler = (event) => {
        event.preventDefault()
        const value = event.target.value
        setCalc(prev => ({...prev, amountOfLiquid: Number(value)}))
    }

    const initialCalculations = {
        amountOfLiquid: 0.0,
        powerOfNicotine: 0.0,
        amountOfAroma: 0.0,
        wantedPower: 0.0,
        glycerinFromNicotine: 0.0,
        glycolFromNicotine: 0.0,
        nicotine: 0.0,
        glycerin: 0.0,
        glycol: 0.0,
    }

    const [calc, setCalc] = useState(initialCalculations);


    const calculate = (e) => {
        console.log(calc)
        setCalc(prevState => ({
            ...prevState,
            glycerinFromNicotine: millilitersOfGlycerinPerNicotineMilligram * (prevState.amountOfLiquid * prevState.wantedPower),
            glycolFromNicotine: millilitersOfGlycolPerNicotineMilligram * (prevState.amountOfLiquid * prevState.wantedPower),
            nicotine: prevState.amountOfLiquid * prevState.wantedPower / prevState.powerOfNicotine,
        }))
        setCalc(prevState => ({
            ...prevState,
            glycerin: 0.7 * prevState.amountOfLiquid - prevState.glycerinFromNicotine - (prevState.amountOfAroma * 0.7),
            glycol: 0.3 * prevState.amountOfLiquid - prevState.glycolFromNicotine - (prevState.amountOfAroma * 0.3),
        }))


    };

    return (
        <div className="container box">
            <label className="label">Total amount of liquid [ml]</label>
            <input className="input"
                   onChange={onChangeHandler}
                   placeholder="Total amount of liquid [ml]"
            />
            <label className="label">Power of nicotine [mg/ml]</label>
            <input type="numeric" className="input"
                   onChange={(e) => setCalc(prev => ({...prev, powerOfNicotine: Number(e.target.value)}))}
                   placeholder="Power of nicotine [mg/ml]"
            />
            <label className="label">Amount of aroma [ml]</label>
            <input type="text" className="input"
                   onChange={(e) => setCalc(prev => ({...prev, amountOfAroma: Number(e.target.value)}))}
                   placeholder="Amount of aroma [ml]"
            />
            <label className="label">Wanted power [mg/ml]</label>
            <input className="input"
                   onChange={(e) => setCalc(prev => ({...prev, wantedPower: Number(e.target.value)}))}
                   placeholder="Wanted power [mg/ml]"
            />
            {/*<Box flex={1}>*/}
            {/*    <Divider padding={1} marginVertical={20}/>*/}

            {/*    <Text>Glycerin from nicotine: {(calc.glycerinFromNicotine).toFixed(2)} ml</Text>*/}
            {/*    <Text>Glycol from nicotine: {(calc.glycolFromNicotine).toFixed(2)} ml</Text>*/}
            {/*    <Text>Glycerin from aroma: {(0.7 * calc.amountOfAroma).toFixed(2)} ml</Text>*/}
            {/*    <Text>Glycol from aroma: {(0.3 * calc.amountOfAroma).toFixed(2)} ml</Text>*/}
            {/*</Box>*/}

            <div>
                <label className="label">Nicotine: {calc.nicotine.toFixed(2)} ml
                    ({(calc.glycerinFromNicotine * glycerinDensity + calc.glycolFromNicotine * glycolDensity).toFixed(2)} g)</label>
                <label className="label">Glycerin: {calc.glycerin.toFixed(2)} ml
                    ({(calc.glycerin * glycerinDensity).toFixed(2)} g)</label>
                <label className="label">Glycol: {calc.glycol.toFixed(2)} ml
                    ({(calc.glycol * glycolDensity).toFixed(2)} g)</label>

                <input className="button is-primary" type="button" value="Calculate" onClick={calculate}/>
            </div>
        </div>
    );
};

export default App;