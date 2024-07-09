import { useNavigate } from 'react-router-dom';
import {
  FormField,
  Button,
  Form,
  Image,
  Segment,
  Header,
} from 'semantic-ui-react';
export default function Contact() {

  const navigate = useNavigate();

  // utilisation de captcha
  // const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  
    navigate('/');
  };

  return (
    <Segment inverted className="signup">
      <Form
        inverted
        size="large"
        className="signup__form"
        onSubmit={handleSubmit}
      >
        <Header inverted as="h1" className="h1 signup__header">
          <Image />
          Créer un compte
        </Header>

        <FormField>
          <label htmlFor="email">Email</label>
          <input
            placeholder="email@domain.com"
            id="email"
            type="email"
          />
        </FormField>

        <FormField>
          <label htmlFor="pseudo">Pseudo</label>
          <input
            placeholder="Pseudo"
            id="pseudo"
            type="text"
    
          />
        </FormField>

        <Button type="submit">Créer un compte</Button>
      </Form>
    </Segment>
  )

}