import HomeIndex from './home/index';
import LayoutProvider from '@theme/Layout/Provider';
import { PageMetadata, HtmlClassNameProvider } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// export default Home;

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    const title = `首页 from ${siteConfig.title}`;
    const description = `欢迎 from ${siteConfig.tagline}`;
    return (
        <LayoutProvider>
            <HtmlClassNameProvider className={'myPageHtmlClassName'}>
                <PageMetadata title={title} description={description} />
                {/*<div className={'page'}>*/}
                <HomeIndex />
                {/*</div>*/}
            </HtmlClassNameProvider>
        </LayoutProvider>
    );
}

