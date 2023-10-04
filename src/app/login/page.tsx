'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>로그인</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>이메일</Form.Label>
              <Form.Control name="email" required type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control name="password" required type="password" />
            </Form.Group>
            {/* <Alert variant="danger" show={passwordHasError}>비밀번호를 6자 이상으로 설정해주세요.</Alert> */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name="doNotLogout" type="checkbox" label="로그인 유지" />
            </Form.Group>

            <Row className="pb-2">
              <Col>
                아직 회원이 아니신가요?
                <Link href={'/register'}> 회원가입 </Link>
              </Col>
            </Row>
            <div className="d-grid mb-2">
              <Button variant="outline-primary" type="submit" size="lg">
                {/* 로그인중 */}
                {loading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  'Login'
                )}
              </Button>
            </div>
            <Alert variant="danger" show={error}>
              오류가 발생했습니다. 이메일과 비밀번호를 확인해주세요.
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
