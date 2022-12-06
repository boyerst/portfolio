import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';


const Tech = () => {
  const { tech } = useContext(PortfolioContext);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  console.log("tech in Tech.jsx: ", tech)

  return (
    <section id="tech">
      <Container>
        <div className="tech-wrapper">
          <Title title="tech" />
            <Container>
              <Row >
              {tech.map((stack) => {
                const {id, img} = stack;
                return (
                  <Col key={id} xs={3}>
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="30px"
                    >
                      <div className="tech-wrapper__image">
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg  filename={img} />
                          </div>
                        </Tilt>
                      </div>
                    </Fade>
                  </Col>
                )
              })}
              </Row>
            </Container>
        </div>
      </Container>
    </section>
  );
};

export default Tech;
