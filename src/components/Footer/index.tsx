import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FooterMenu, FooterWrapper } from './Styled'

function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col xs={12}>
            <FooterMenu>
              <li>
                <span>会員登録</span>
              </li>
              <li>
                <span>運営会社</span>
              </li>
              <li>
                <span>利用規約</span>
              </li>
              <li>
                <span>個人情報の取扱について</span>
              </li>
              <li>
                <span>特定商取引法に基づく表記</span>
              </li>
              <li>
                <span>お問い合わせ</span>
              </li>
            </FooterMenu>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
