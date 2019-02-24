import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { withRouter } from 'next/router';
import { Provider } from 'react-redux';
import createStore from 'store/createStore';

class AppExtension extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }

    componentDidCatch(error, errorInfo) {
        // This is needed to render errors correctly in development / production
        super.componentDidCatch(error, errorInfo);
    }

    render() {
        const { Component, pageProps, store, router } = this.props
        return (
            <Container>
                <Provider store={store}>
                    <Component router={router} {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withRedux(createStore)(
    withRouter(AppExtension)
)