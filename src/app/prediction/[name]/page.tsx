

const getPredictedAge =async (name:string)=>{
    const res= await fetch (`http://api.agify.io/?name=${name}`)
    return res.json ();
}
const getPredictedGender =async (name:string)=>{
    const res= await fetch (`http://api.agify.io/?name=${name}`)
    return res.json ();
}
const getPredictedCountry =async (name:string)=>{
    const res= await fetch (`http://api.agify.io/?name=${name}`)
    return res.json ();
}
 

interface Params {
    params : { name : string};
}


export default async function Page({ params } : Params){
    const ageData = getPredictedAge(params.name)
    const genderData = getPredictedGender(params.name)
    const countryData = getPredictedCountry(params.name)
const [age,gender,country]=await Promise.all([ageData,genderData,countryData])

    return (

        <div>
            <div>
            <div> Personal info</div>
            <div> Age :  {age.age} </div>
            <div> gender :  {gender.gender} </div>
            <div> Age :  {country.country} </div>

            </div>
        </div>
    );
}