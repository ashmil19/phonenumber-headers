const Main = () =>{
    const { useState } = React

    const [number, setNumber] = useState('')
    const [values, setValues] = useState('')

    const handlePost = async () =>{
        if(number.trim() === ""){
            return alert("give valid number!!!")
        }

        const postData = {
            phonenumber: number
        }
        
        try {
            const res = await axios.post('https://chimpu.xyz/api/post.php', postData)
            setNumber('')
            const headers = res?.headers?.toString()
            setValues(headers)
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <>
            <div className="container">
                <div className="input-container">
                    <input 
                     type="number" 
                     min='0' 
                     value={number} 
                     onChange={(e)=>{
                        setNumber(e.target.value)
                        setValues('')
                    }} className="inpt-numbr" placeholder="Phone Number" />
                    <div className="btn-container">
                        <button onClick={handlePost}>Send</button>
                    </div>
                </div>
                <div className="headers">{values && values}</div>
            </div>
        </>
    )
}