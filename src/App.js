import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import thumbnail from './static_images/thumbnail.png';
import { HomePage, AlumniPage, NotFound } from './pages';
import { Footer } from './components';
import { url } from './url';

class App extends Component {
  state = {
    appState: {
      carousels: [],
      missions: [],
      schedules: [],
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
    isLoadedAll: false,
  };

  async componentDidMount() {
    try {
      const [
        carouselsRes,
        missionsRes,
        schedulesRes,
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
        fetch(url.schedules),
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
        schedules,
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
        schedulesRes.json(),
        committeesRes.json(),
        teammemsRes.json(),
        alumniRes.json(),
        projectsRes.json(),
        rulesRes.json(),
        usersRes.json(),
        contactsRes.json(),
      ]);

      const convertedSchedules = schedules.map((meeting) => ({
        id: meeting.id,
        date: this._convertUTCDateToLocalDate(meeting.date),
        topic: meeting.topic,
        description: meeting.description,
        location: meeting.location,
        link: meeting.link ? meeting.link : '',
      }));

      convertedSchedules.sort((b, a) => a.date.getTime() - b.date.getTime());

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
        schedules: convertedSchedules,
        committees: processedCommittees,
        teammems,
        alumni,
        projects,
        rules,
        numberOfUsers: filterUsers.length,
        email: contacts[0].email,
        slack: contacts[0].slack,
        linkedin: contacts[0].linkedin,
        youtube: contacts[0].youtube,
      };
      this.setState({ appState, isLoadedAll: true });
    } catch (err) {
      this.setState({ isLoadedAll: false });
    }
  }

  _convertUTCDateToLocalDate = (datestring) => {
    const newDate = new Date(datestring);
    const offset = newDate.getTimezoneOffset() / 60;
    const hours = newDate.getHours();
    newDate.setHours(hours + offset);

    return newDate;
  };

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
    const { appState, isLoadedAll } = this.state;
    const { slack, email, linkedin, youtube } = appState;

    const homeState = {
      carousels: appState.carousels,
      missions: appState.missions,
      schedules: appState.schedules,
      committees: appState.committees,
      teammems: appState.teammems,
      projects: appState.projects,
      rules: appState.rules,
      numberOfUsers: appState.numberOfUsers,
    };

    const alumniState = {
      carousels: appState.carousels,
      alumni: appState.alumni,
    };

    if (!isLoadedAll) {
      return null;
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
