import React, { Component } from 'react';

import { Helmet } from 'react-helmet';
import thumbnail from './static_images/thumbnail.png';

import Header from './components/Header/Header';
import Mission from './components/Mission/Mission';
import Schedules from './components/Schedules/Schedules';
import Projects from './components/Projects/Projects';
import Banner from './components/Banner/Banner';
import Committees from './components/Committees/Commitees';
import Team from './components/Team/Team';
import GetInvolved from './components/GetInvolved/GetInvolved';
import Footer from './components/Footer/Footer';

import { url } from './url';

class App extends Component {
  state = {
    appState: {
      carousels: [],
      missions: [],
      schedules: [],
      committees: [],
      teammems: [],
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
    const {
      carousels,
      missions,
      schedules,
      committees,
      teammems,
      projects,
      rules,
      numberOfUsers,
      slack,
      email,
      linkedin,
      youtube,
    } = appState;

    if (!isLoadedAll) {
      return null;
    }

    return (
      <div>
        {this.renderHelMet()}
        <Header carousels={carousels} />
        <Mission missions={missions} />
        <Banner />
        <Schedules schedules={schedules} />
        <Committees committees={committees} />
        <Team teammems={teammems} />
        <Projects projects={projects} />
        <GetInvolved
          rules={rules}
          numberOfUsers={numberOfUsers}
          slack={slack}
        />
        <Footer
          email={email}
          slack={slack}
          linkedin={linkedin}
          youtube={youtube}
        />
      </div>
    );
  }
}

export default App;
