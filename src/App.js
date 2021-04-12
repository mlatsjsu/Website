import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import thumbnail from './static_images/thumbnail.png';
import { HomePage, AlumniPage, NotFound } from './pages';
import { Footer } from './components';
import { url } from './url';
import img from './static_images/under_maintenance.png';

class App extends Component {
  state = {
    appState: {
      carousels: [],
      missions: [],
      committees: [],
      teammems: [],
      alumni: [],
      projects: [],
      rules: [],
      numberOfUsers: 0,
      slack: '',
      email: '',
      linkedin: '',
      youtube: '',
    },
    isLoading: false,
    isLoadedAll: false,
  };

  async componentDidMount() {
    try {
      await this.setState({ isLoading: true });
      const [
        carouselsRes,
        missionsRes,
        committeesRes,
        teammemsRes,
        alumniRes,
        projectsRes,
        rulesRes,
        usersRes,
        contactsRes,
      ] = await Promise.all([
        fetch(url.carousels),
        fetch(url.missions),
        fetch(url.committees),
        fetch(url.teammems),
        fetch(url.alumni),
        fetch(url.projects),
        fetch(url.rules),
        fetch(url.slack),
        fetch(url.contacts),
      ]);

      const [
        carousels,
        missions,
        committees,
        teammems,
        alumni,
        projects,
        rules,
        users,
        contacts,
      ] = await Promise.all([
        carouselsRes.json(),
        missionsRes.json(),
        committeesRes.json(),
        teammemsRes.json(),
        alumniRes.json(),
        projectsRes.json(),
        rulesRes.json(),
        usersRes.json(),
        contactsRes.json(),
      ]);

      const processedCommittees = committees.map((committee) => {
        if (committee.leaders.length) {
          const seen = new Set();
          const all = [...committee.leaders, ...committee.teammems];

          committee.teammems = all.filter((el) => {
            const duplicate = seen.has(el.id);
            seen.add(el.id);
            return !duplicate;
          });
        }
        return committee;
      });

      teammems.sort((a, b) => a.order - b.order);

      alumni.sort((a, b) => a.order - b.order);

      projects.sort((a, b) => a.order - b.order);

      rules.sort((a, b) => a.order - b.order);

      const filterUsers = users.members.filter((user) => !user.is_bot);

      const appState = {
        ...this.state.appState,
        carousels,
        missions,
        committees: processedCommittees,
        teammems,
        alumni,
        projects,
        rules,
        email: contacts[0].email,
        numberOfUsers: filterUsers.length,
        slack: contacts[0].slack,
        linkedin: contacts[0].linkedin,
        youtube: contacts[0].youtube,
      };
      this.setState({ appState, isLoadedAll: true, isLoading: false });
    } catch (err) {
      this.setState({ isLoadedAll: false, isLoading: false });
    }
  }

  // _convertUTCDateToLocalDate = (datestring) => {
  //   const newDate = new Date(datestring);
  //   const offset = newDate.getTimezoneOffset() / 60;
  //   const hours = newDate.getHours();
  //   newDate.setHours(hours + offset);

  //   return newDate;
  // };

  renderHelMet = () => {
    return (
      <Helmet>
        <meta
          name="description"
          content="Machine Learning at SJSU is a Recognized Student Organization at San Jose State University. We host machine learning workshops, reading groups, guest speakers, and projects. Furthermore, we actively encourage diversity in the field to create a community capable of tackling globally relevant problems."
        />
        <meta
          name="keywords"
          content="Machine Learning,SJSU,SJSU Machine Learning,ML@SJSU,Artificial Intelligence,Natural Language Processing,NLP,Computer Vision,Neural Networks,Deep Learning,Big Data,Science,STEM,Diversity"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ML@SJSU - Machine Learning Club" />
        <meta property="og:image" content={thumbnail} />
        <meta
          property="og:description"
          content="Machine Learning at SJSU is a Recognized Student Organization at San Jose State University. We host machine learning workshops, reading groups, guest speakers, and projects. Furthermore, we actively encourage diversity in the field to create a community capable of tackling globally relevant problems."
        />
        <meta
          property="og:site_name"
          content="ML@SJSU - Machine Learning Club"
        />
        <meta property="og:url" content="https://mlatsjsu.club/" />

        <meta name="twitter:title" content="ML@SJSU - Machine Learning Club" />
        <meta property="twitter:image" content={thumbnail} />
        <meta
          property="twitter:description"
          content="Machine Learning at SJSU is a Recognized Student Organization at San Jose State University. We host machine learning workshops, reading groups, guest speakers, and projects. Furthermore, we actively encourage diversity in the field to create a community capable of tackling globally relevant problems."
        />
        <meta property="twitter:url" content="https://mlatsjsu.club/" />
      </Helmet>
    );
  };

  render() {
    const { appState, isLoadedAll, isLoading } = this.state;
    const { slack, email, linkedin, youtube } = appState;

    const homeState = {
      carousels: appState.carousels,
      missions: appState.missions,
      committees: appState.committees,
      teammems: appState.teammems,
      projects: appState.projects,
      rules: appState.rules,
      slack,
      numberOfUsers: appState.numberOfUsers,
    };

    const alumniState = {
      carousels: appState.carousels,
      alumni: appState.alumni,
    };

    if (isLoading) {
      return null;
    }

    if (!isLoadedAll) {
      return (
        <div
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            alt="maintenance"
            src={img}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
      );
    }

    return (
      <Router>
        <div>
          {this.renderHelMet()}
          <Switch>
            <Route exact path="/">
              <HomePage pageState={homeState} />
            </Route>
            <Route exact path="/alumni">
              <AlumniPage pageState={alumniState} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer
            email={email}
            slack={slack}
            linkedin={linkedin}
            youtube={youtube}
          />
        </div>
      </Router>
    );
  }
}

export default App;
