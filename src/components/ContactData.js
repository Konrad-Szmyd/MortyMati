
const ContactData = ({state}) => {
    const {email,text} = state
    return (
        <div>
            <p>Email: {email}</p>
            <p>Text: {text}</p>
        </div>
    )
}

export default ContactData