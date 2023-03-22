import { Col, Row } from 'antd';
import { BasePage } from 'assets/components/BasePage/BasePage';
import { CalendarSection } from 'assets/pages/IndexPage/Components/CalendarSection';
import { ContactsSection } from 'assets/pages/IndexPage/Components/ContactsSection';
import { NewsSection } from 'assets/pages/IndexPage/Components/NewsSection';
import { YouTubeSection } from 'assets/pages/IndexPage/Components/YouTubeSection';
import { observer } from 'mobx-react-lite';

export const IndexPage = observer(() => {
    return (
        <BasePage>
            <Row>
                <Col xs={24}>
                    <YouTubeSection />
                </Col>
                <Col xs={24}>
                    <NewsSection />
                </Col>
                <Col xs={24}>
                    <CalendarSection />
                </Col>
                <Col xs={24}>
                    <ContactsSection />
                </Col>
            </Row>
        </BasePage>
    );
});
