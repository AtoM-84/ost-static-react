import { useNavigate } from "react-router-dom";
import { FormField, Button, Form, Segment, GridRow, GridColumn, Grid } from "semantic-ui-react";
export default function Contact() {
    const navigate = useNavigate();

    // utilisation de captcha
    // const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        navigate("/");
    };

    return (
        <Grid columns={2} centered>
            <GridRow>
                <GridColumn width={4} content="centered" padded="vertically">
                    <Segment inverted>
                        <Form inverted size="big" className="signup__form" onSubmit={handleSubmit}>
                    
                            <FormField>
                                <label htmlFor="email">Your email</label>
                                <input placeholder="email@domain.com" id="email" type="email" />
                            </FormField>
                            <FormField label="Your message" control="textarea" rows="5" />
                            <Button type="submit">Send</Button>
                        </Form>
                    </Segment>
                </GridColumn>
            </GridRow>
        </Grid>
    );
}
