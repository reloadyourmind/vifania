import { Col, Row } from 'antd';
import { BasePage } from 'assets/components/BasePage/BasePage';
import { t } from 'i18next';
import { observer } from 'mobx-react-lite';

export const IndexPage = observer(() => {
    return (
        <BasePage title={t('Page.Index.Title', 'Вифания')}>
            <Row gutter={24}>
                <Col xs={24}>
                    {t('Page.Index.msg', 'Смотрите трансляции на ютубе))')}
                </Col>
            </Row>
        </BasePage>
    );
});
