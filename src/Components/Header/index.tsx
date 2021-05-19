import * as React from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link, useHistory, useLocation } from 'react-router-dom';

import logo from './logo.svg';
import menu from './menu.svg';
import close from './close.svg';

import './index.scss';
import Button from '../Button';
import { H3, P1, P2 } from '../Text';
import RippleEffect from '../Button/RippleEffect';
import useSession, { Session } from '../../Helpers/session';
import LoadingSpinner from '../LoadingSpinner';
import { StudentPhoto } from '../StudentCard';
import { takeString } from '../../Helpers/api';

const HeaderLanguages = () => {
  const { i18n, t } = useTranslation();

  return (
    <span className="Header_Languages">
      {
        languages.map(({ text, code }) => 
          <span
            key={code}
            className={cx({ selected: i18n.language === code })}
            children={<P2>{text}</P2>}
            onClick={() => {
              i18n.changeLanguage(code)
              localStorage.setItem('studsearch-lng', code);
            }}
          />
        )
      }
    </span>
  )
}

const MobileMenu = ({ closeMenu, session, startRefreshing }: {
  closeMenu?: () => void,
  session: ReturnType<typeof useSession>,
  startRefreshing?: () => void
}) => {
  const { i18n, t } = useTranslation();
  const history = useHistory(),
        location = useLocation();
  const atCabinet = location.pathname === '/cabinet/';

  return (
    <div className="Header_Menu">
      <Link className="Header_Logo" to='/' onClick={closeMenu}>
        <img alt="StudSearch" aria-label="StudSearch" src={logo} />
      </Link>
      <span className="Header_CloseButton" onClick={closeMenu}>
        <RippleEffect />
        <img src={close} />
      </span>
      <div className="Buttons">
        { pages?.map?.((page, i) => 
          <div
            key={i}
            className={cx('Page', { selected: location?.pathname === page?.path })}
            onClick={((page) => () => {
              history.push(page?.path, location?.state);
              closeMenu?.();
            })(page)}
          >
            <RippleEffect />
            <H3>{t(page?.textKey)}</H3>
          </div>
        ) }
        <div className="LoginButtons">
          { (session?.verified && session?.studentUuid) ?
            <Link
              to='/cabinet/'
              className={cx('CabinetLink', { selected: atCabinet })}
              onClick={() => closeMenu?.()}
            >
              <StudentPhoto
                uuid={session?.studentUuid}
                size={36}
              />
              <P1>{t('header-cabinet')}</P1>
            </Link>
            :
            <>
              <Button
                className="Header_Buttons_Register"
                to='/register'
                onClick={() => {
                  closeMenu?.();
                }}
              >
                <P2>{t('header-register')}</P2>
              </Button>
              <Button
                className="Header_Buttons_Login"
                href={session?.loginHref}
                onClick={() => {
                  startRefreshing?.();
                  closeMenu?.();
                }}
                target='_blank' outline
              >
                <P2>{t('header-login')}</P2>
              </Button>
            </>
          }
        </div>
        <HeaderLanguages />
      </div>
    </div>
  );
}

const languages = [
  { text: 'UA', code: 'uk-UA' },
  { text: 'EN', code: 'en-US' },
  { text: 'RU', code: 'ru-RU' }
];
const MIN_TIMEOUT = 1000;
const Header = () => {
  const { i18n, t } = useTranslation();

  const history = useHistory(),
        location = useLocation();
  const atCabinet = location.pathname === '/cabinet/';

  const session = useSession();

  const [atTop, setAtTop] = React.useState(true);
  React.useEffect(() => {
    const onScroll = () =>
      setAtTop(window.scrollY < 25);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const lastRefreshed = React.useRef<number | null>(null);
  const [refreshing, setRefreshing] = React.useState(false);
  React.useEffect(() => {
    if (refreshing && !session?.verified) {
      const timeout = Math.max(MIN_TIMEOUT, Date.now() - (lastRefreshed?.current ?? (Date.now() - MIN_TIMEOUT)));
      setTimeout(() => {
        if (Date.now() - (lastRefreshed?.current ?? 0) < MIN_TIMEOUT)
          return;
        lastRefreshed.current = Date.now();
        session?.refresh?.();
      }, timeout);
    }
  }, [ refreshing, session?.refreshId ]);

  const [mobileMenu, setMobileMenu] = React.useState<JSX.Element | null>(null);
  const openMobileMenu = () => {
    setMobileMenu(
      <MobileMenu
        closeMenu={() => setMobileMenu(null)}
        session={session}
        startRefreshing={() => setRefreshing(true)}
      />
    );
  }

  return (
    <>
      <div className={cx("Header", { atTop })}>
        <div>
          <div className="Header_Top">
            <HeaderLanguages />
            <Link className="Header_Logo" to='/'>
              <img alt="StudSearch" aria-label="StudSearch" src={logo} />
            </Link>
            <span
              className="Header_MenuButton"
              onClick={openMobileMenu}
            >
              <RippleEffect />
              <img src={menu} />
            </span>
            <span className="Header_Buttons">
              { session?.loading &&
                <LoadingSpinner size={16} />
              }
              { !session?.verified && !session?.loading && <>
                <Button
                  className="Header_Buttons_Login"
                  href={session?.loginHref}
                  onClick={() => setRefreshing(true)}
                  target='_blank' outline
                >
                  <P2>{t('header-login')}</P2>
                </Button>
                <Button
                  className="Header_Buttons_Register"
                  to='/register'
                >
                  <P2>{t('header-register')}</P2>
                </Button>
              </> }
              { session?.verified && session?.studentUuid &&
                <Link to='/cabinet/' className={cx('CabinetLink', { selected: atCabinet })}>
                  <StudentPhoto
                    uuid={session?.studentUuid}
                    size={36}
                  />
                  <P1>{t('header-cabinet')}</P1>
                </Link>
              }
            </span>
          </div>
          <div className="Header_Bottom">
            <HeaderTabs />
          </div>
        </div>
      </div>
      { mobileMenu }
    </>
  )
};

export default Header;

const pages = [
  { textKey: 'header-tab-main', path: '/' },
  { textKey: 'header-tab-rating', path: '/rating' },
  { textKey: 'header-tab-about', path: '/about', hideInMobile: true },
  { textKey: 'header-tab-help', path: '/help', hideInMobile: true }
  // { textKey: 'header-tab-students', path: '/students' }
];

const HeaderTabs = () => {
  const { i18n, t } = useTranslation();
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="HeaderTabs">
      { pages.map(({ textKey, path, hideInMobile }, key) => {
        const selected = location.pathname === path;
        return (
          <span key={key} className={cx('HeaderTabs_Tab', { selected, hideInMobile })}>
            <span onClick={() => history.push(path)}>
              <RippleEffect disabled={selected} />
              <P2>{t(textKey)}</P2>
            </span>
          </span>
        );
      }) }
    </div>
  );
}
