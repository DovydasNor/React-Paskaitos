import './App.css';
import Aside from './components/Aside/Aside'
import MainSection from './components/MainSection/MainSection'
import photo1 from './images/Serbintaitė-big.jpg'
import photo2 from './images/Pauliaus-big.png'
import photo3 from './images/Ovidijus.jpeg'
import photo4 from './images/Milda.jpg'
import photo5 from './images/Giedrius.jpg'
import photo6 from './images/Marius.jpeg'
import eventHeaderImage from './images/CA_event-1024x576.png'

function App() {

  const NEWS_DATA = {

    newsTitle: 'Naujienos',

    news: [
      {
        url: '/#',
        photo: photo1,
        category: 'Karjera',
        title: 'Kaip junior’ui išnaudoti „LinkedIn“ savo naudai?',
        date: '2024-05-28',
      },
      {
        url: '/#', 
        photo: photo2,
        category: 'SĖKMĖS ISTORIJOS',
        title: 'Sėkmės istorija – įsidarbinimas į Asteri',
        date: '2024-05-23',
      },
      {
        photo: photo3,
        category: 'SĖKMĖS ISTORIJOS',
        title: 'Sėkmės istorija – įsidarbinimas į Bentley Systems',
        date: '2024-04-25',
        url: '/#',
      },
      {
        photo: photo4,
        category: 'SĖKMĖS ISTORIJOS',
        title: 'Sėkmės istorija – įsidarbinimas į Fresh media',
        date: '2024-04-25',
        url: '/#',
      },
      {
        photo: photo5,
        category: 'SĖKMĖS ISTORIJOS',
        title: 'Sėkmės istorija – įsidarbinimas į Visma Tech',
        date: '2024-04-25',
        url: '/#',
      },
      {
        photo: photo6,
        category: 'NAUJIENOS',
        title: 'Už verslo partnerystes „CodeAcademy“ programavimo akademijoje bus atsakingas IT ekspertas Marius Pareščius',
        date: '2024-04-16',
        url: '/#',
      },
    ]
  }

  const VIDEOS_DATA = [
    {
      className:'big-video',
      src:'https://www.youtube.com/embed/Rz6bswWbPqw?si=hQr1EQgQmh4u6i-P',
      title:'#6 Studentės istorija: sėkmė slypi disciplinoje',
    },
    {
      className:'small-video', 
      src:'https://www.youtube.com/embed/yovsPjuDElw?si=uzIbDVyp--58_tM3',
      title:'#4 Ctrl+Alt+Defend: Kibernetinis saugumas šiandien',
    },
    {
      className:'small-video', 
      src:'https://www.youtube.com/embed/7X4iX-D6ymQ?si=BbrGst9YICGmlAJH',
      title:'Susipažink su mūsų įdarbinimo partneriais – Danske Bank!',
    },
  ]

  const PODCAST_DATA = {
    podcastSectionTitle: 'Podcastai ir radijo laidos',
    podcastsData: [
      {
        length:'7:55',
        title:'Pojūčius pirštų galiukams sugražinti gali smegenų implantas',
        date:'2021-09-02',
      },
      {
        length:'7:54',
        title:'Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“',
        date:'2021-08-25',
      },
      {
        length:'9:22',
        title:'Kaip gyvensime 2031-aisiais? 10 esminių prognozių',
        date:'2021-08-18',
      },
      {
        length:'9:22',
        title:'Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“',
        date:'2021-08-11',
      },
    ]
  }

  const EVENTS_DATA = [
    {
      eventHeader:eventHeaderImage, 
      day:'18',
      month:'BIR',
      address:'Upės g. 21, Greenhall 1, 10 aukštas ir Online',
      title:'Java: Kodėl ji vis dar svarbi IT rinkoje?',
    },
    {
      day:'30',
      month:'GEG',
      address:'Upės g. 21, Greenhall 1, 10 aukštas ir Online',
      title:'CodeAcademy galimybės verslui',
    },
    {
      day:'24',
      month:'GEG',
      address:'Lietuvos parodų ir kongresų centras LITEXPO',
      title:'COMIC CON BALTICS 2024',
    },
  ]


  return (
    <div className="container">
      <MainSection newsData={NEWS_DATA} videosData={VIDEOS_DATA} />
      <Aside podcastData={PODCAST_DATA} eventsData={EVENTS_DATA} />
    </div>
  );
}

export default App;
