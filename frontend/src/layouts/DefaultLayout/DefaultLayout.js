import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import Footer from '~/layouts/components/Footer';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}
DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
