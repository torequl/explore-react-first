// import './user.css'


export default function SingleFriend({userx}){
    const {name, email, id, phone, address} = userx;
    console.log(userx);
    return (
        <div className='in-box'>
            <h3>ID: {id} </h3>
            <h4>Name: {name} </h4>
            <p>Email: {email} </p>
            <p>Phone: {phone} </p>
            <h3>Address</h3>
            <p>City: {address.city} </p>
            <p>Street: {address.street} </p>
            <p>Zip-code: {address.zipcode} </p>
        </div>
    )
}
