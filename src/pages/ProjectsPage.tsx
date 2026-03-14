import styled from 'styled-components';

const Page = styled.main`
  min-height: 100vh;
  padding: 8rem 3rem 4rem;
  background: #FFFBFD;
  font-family: 'Pretendard', sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #171717;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #4B5563;
  max-width: 480px;
`;

function ProjectsPage() {
  return (
    <Page>
      <Title>프로젝트 목록 (테스트)</Title>
      <Description>프로젝트 보러가기 버튼으로 이동한 페이지입니다. 추후 실제 프로젝트 목록으로 교체됩니다.</Description>
    </Page>
  );
}

export default ProjectsPage;
