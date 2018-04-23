import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    en:{
        //Navigation bar
        Landing:"Landing",
        ContactUs:"ContactUs",
        SignUp:"SingUp",
        SignIn:"SignIn",
        //ContactUsForm
        ContactUsText:"Contact with us if you want more information about our products or if you want to work with us.",
        ContactUsName:"Your name",
        ContactUsEmail:"Your email",
        ContactUsSubject:"Subject",
        ContactUsMessage:"Message",
        ContactUsSend:"Send"
    },
    es: {
        //Navigation Bar
        Landing:"Landing",
        ContactUs:"Contáctenos",
        SignUp:"SingUp",
        SignIn:"SignIn",
        //ContactUsForm
        ContactUsText:"Contáctenos en el caso de que quiera obtener más información sobre nosotros o si desea trabajar con nosotros",
        ContactUsName:"Nombre",
        ContactUsEmail:"Email",
        ContactUsSubject:"Asunto",
        ContactUsMessage:"Mensaje",
        ContactUsSend:"Enviar"
    }
});


export default strings;