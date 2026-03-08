import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useMotionValueEvent, useSpring } from 'motion/react';
import styled from 'styled-components';

const INSTAGRAM_URL = 'https://instagram.com/apply_mirim';
const PROJECT_IMAGE_BASE = 'https://picsum.photos/530/298';

const gray900 = '#171717';
const primary = '#FFA1BC';

const PageWrapper = styled.main`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  background-color: #FFFBFD;
`;

const Section = styled.section<{ $minHeight?: string }>`
  min-height: ${(p) => p.$minHeight ?? '100vh'};
  padding: 6rem 3rem 4rem;
  scroll-margin-top: 5rem;
`;

const HeroSection = styled(Section)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 180px;
  padding-left: 0;
`;

const HeroLogo = styled(motion.div)`
  margin-bottom: 0;

  img {
    width: 409px;
    height: 104px;
    object-fit: contain;
  }
`;

const HeroText = styled(motion.p)`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.85;
  color: #000;
  max-width: 520px;
  margin: 40px 0 2rem 0;
  font-family: 'Pretendard', sans-serif;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const InstagramButtonOuter = styled.span`
  display: inline-block;
  width: 189px;
  height: 49px;
  padding: 2.5px;
  box-sizing: border-box;
  background: linear-gradient(to right, #FE227C, #96245D);
  border-radius: 0;
`;

const InstagramButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #FFFBFD;
  color: #000;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 0;
  text-decoration: none;
  font-family: 'Pretendard', sans-serif;
  transition: background 0.25s ease, color 0.25s ease;

  &:hover {
    background: #fef5f9;
    color: #96245D;
  }
`;

const AboutSection = styled(Section)`
  background: #FFFBFD;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
`;

const AboutTitle = styled(motion.h2)`
  font-size: 56px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 480px;
  width: 100%;
  letter-spacing: -0.02em;
  line-height: 1.3;
  font-family: 'Pretendard', sans-serif;
  white-space: pre-line;
`;

const AboutContentRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 84px;
  flex-wrap: nowrap;
  width: 100%;
  margin: 0 auto;
`;

const LogoTypoWrapper = styled(motion.div)`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  img {
    width: 689px;
    height: auto;
    object-fit: contain;
    display: block;
  }
`;

const gray200 = '#B8B8B8';
const gray600 = '#4B5563';

const AboutText = styled(motion.div)`
  flex: 0 0 auto;
  min-width: 280px;
  max-width: 480px;
  line-height: 1.9;
  font-family: 'Pretendard', sans-serif;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutSchool = styled(motion.p)`
  font-size: 34px;
  font-weight: 500;
  color: ${gray200};
  margin-bottom: 0.5rem;
`;

const AboutHeading = styled(motion.p)`
  font-size: 56px;
  font-weight: 700;
  color: #000;
  margin-bottom: 0.25rem;
  line-height: 1.2;
  white-space: nowrap;
`;

const AboutScroll = styled(motion.p)`
  font-size: 18px;
  color: ${gray600};
  margin-top: 1rem;
`;

const ProjectsSection = styled(Section)`
  background: #FFFBFD;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ProjectsSlogan = styled(motion.p)`
  font-size: 56px;
  font-weight: 700;
  color: ${gray900};
  line-height: 1.3;
  font-family: 'Pretendard', sans-serif;
  margin-bottom: 0;
  max-width: 900px;
`;

const ProjectCtaWrap = styled(motion.div)`
  margin-top: 1rem;
`;

const ProjectCtaOuter = styled.span`
  display: inline-block;
  width: 169px;
  height: 49px;
  padding: 2.5px;
  box-sizing: border-box;
  background: linear-gradient(to right, #FE227C, #96245D);
  border-radius: 0;
`;

const ProjectCtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: ${primary};
  color: #000;
  font-weight: 600;
  font-size: 8px;
  border-radius: 0;
  text-decoration: none;
  font-family: 'Pretendard', sans-serif;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const ProjectsScrollSection = styled.div`
  margin-top: 104px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ProjectsGradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse 180% 120% at 50% 50%, rgba(255, 95, 204, 0.2) 0%, transparent 55%);
`;

const ProjectRowAnimated = styled(motion.div)`
  display: flex;
  width: max-content;
  gap: 12px;
  padding: 8px 0;
`;

const ProjectImage = styled.img`
  width: 530px;
  height: 298px;
  object-fit: cover;
  flex-shrink: 0;
  display: block;
`;

const ProjectRowTrack = styled.div`
  overflow: hidden;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  font-family: 'Pretendard', sans-serif;
`;

const SectionSub = styled(motion.p)`
  font-size: 1rem;
  opacity: 0.85;
  max-width: 480px;
  font-family: 'Pretendard', sans-serif;
`;

const QASection = styled(Section)`
  background: #FFFBFD;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 1.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

const PROJECT_IMAGES_ROW1 = Array.from({ length: 10 }, (_, i) => `${PROJECT_IMAGE_BASE}?random=${i + 1}`);
const PROJECT_IMAGES_ROW2 = Array.from({ length: 10 }, (_, i) => `${PROJECT_IMAGE_BASE}?random=${i + 20}`);
const PROJECT_IMAGES_ROW3 = Array.from({ length: 10 }, (_, i) => `${PROJECT_IMAGE_BASE}?random=${i + 40}`);

function HomePage() {
  const pageScrollRef = useRef<HTMLElement>(null);
  const projectsScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: pageScrollRef,
    target: projectsScrollRef,
    offset: ['start start', 'end end'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 0.5,
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  useMotionValueEvent(smoothProgress, 'change', (v) => setScrollProgress(v ?? 0));

  const scrollSpeed = 0.4;
  const row1X = scrollProgress * -50 * scrollSpeed;
  const row2X = (1 - scrollProgress) * -50 * scrollSpeed;
  const row3X = scrollProgress * -50 * scrollSpeed;

  return (
    <PageWrapper ref={pageScrollRef}>
      <HeroSection id="home">
        <HeroLogo
          initial={{ opacity: 0, x: -80, scale: 0.92, filter: 'blur(12px)' }}
          animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 1.8 },
            filter: { duration: 1.8 },
          }}
        >
          <img src="/assets/logo_typo.png" alt="APP:LY" />
        </HeroLogo>
        <HeroText
          initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 1.9,
            delay: 0.55,
            ease: [0.16, 1, 0.3, 1],
            filter: { duration: 1.5 },
          }}
        >
          APP:IY는 차세대 개발 흐름에 따른 기술들을 익히고 연구하며 실제로 서비스를 구현해서
          학교 및 사회에 기여하는 전공 동아리입니다.
        </HeroText>
        <ButtonGroup
          initial={{ opacity: 0, y: 32, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.95,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <InstagramButtonOuter>
            <InstagramButton href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              어플라이 인스타 보기
            </InstagramButton>
          </InstagramButtonOuter>
        </ButtonGroup>
      </HeroSection>

      <AboutSection id="about">
        <AboutTitle
          initial={{ opacity: 0, y: 56, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: 1.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {`APPIY\n동아리를 소개합니다!`}
        </AboutTitle>
        <AboutContentRow
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.22, delayChildren: 0.35 },
            },
          }}
        >
          <LogoTypoWrapper
            variants={{
              hidden: { opacity: 0, scale: 0.82, filter: 'blur(10px)' },
              visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
            }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/assets/logo.png" alt="APP:LY" />
          </LogoTypoWrapper>
          <AboutText variants={{ hidden: {}, visible: {} }}>
            <AboutSchool
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              미림마이스터고등학교
            </AboutSchool>
            <AboutHeading
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              자율 동아리 APPIY
            </AboutHeading>
            <AboutHeading
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              새로운 부원을 모집합니다!
            </AboutHeading>
            <AboutScroll
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              저희 동아리가 궁금하다면 아래로 스크롤 해 주세요!
            </AboutScroll>
          </AboutText>
        </AboutContentRow>
      </AboutSection>

      <ProjectsSection id="projects" ref={projectsScrollRef}>
        <FadeUp>
          <ProjectsSlogan>
            기술에 가치를 더하고(Apply) 더 넓은 세상으로 비상(Fly)합니다
          </ProjectsSlogan>
        </FadeUp>
        <FadeUp delay={0.15}>
          <ProjectCtaWrap>
            <ProjectCtaOuter>
              <ProjectCtaButton to="/projects">프로젝트 보러가기</ProjectCtaButton>
            </ProjectCtaOuter>
          </ProjectCtaWrap>
        </FadeUp>
        <ProjectsScrollSection>
          <ProjectsGradientOverlay />
          <ProjectRowTrack>
            <ProjectRowAnimated style={{ transform: `translateX(${row1X}%)` }}>
              {PROJECT_IMAGES_ROW1.map((src, i) => (
                <ProjectImage key={`r1-${i}`} src={src} alt="" />
              ))}
              {PROJECT_IMAGES_ROW1.map((src, i) => (
                <ProjectImage key={`r1-dup-${i}`} src={src} alt="" />
              ))}
            </ProjectRowAnimated>
          </ProjectRowTrack>
          <ProjectRowTrack>
            <ProjectRowAnimated style={{ transform: `translateX(${row2X}%)` }}>
              {PROJECT_IMAGES_ROW2.map((src, i) => (
                <ProjectImage key={`r2-${i}`} src={src} alt="" />
              ))}
              {PROJECT_IMAGES_ROW2.map((src, i) => (
                <ProjectImage key={`r2-dup-${i}`} src={src} alt="" />
              ))}
            </ProjectRowAnimated>
          </ProjectRowTrack>
          <ProjectRowTrack>
            <ProjectRowAnimated style={{ transform: `translateX(${row3X}%)` }}>
              {PROJECT_IMAGES_ROW3.map((src, i) => (
                <ProjectImage key={`r3-${i}`} src={src} alt="" />
              ))}
              {PROJECT_IMAGES_ROW3.map((src, i) => (
                <ProjectImage key={`r3-dup-${i}`} src={src} alt="" />
              ))}
            </ProjectRowAnimated>
          </ProjectRowTrack>
        </ProjectsScrollSection>
      </ProjectsSection>

      <QASection id="qa">
        <FadeUp>
          <SectionTitle>Q&A</SectionTitle>
        </FadeUp>
        <FadeUp delay={0.15}>
          <SectionSub>자주 묻는 질문과 답변을 확인해 보세요.</SectionSub>
        </FadeUp>
      </QASection>
    </PageWrapper>
  );
}

export default HomePage;
