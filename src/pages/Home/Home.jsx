import Navbar from '../../components/Navbar/Navbar'
import MailList from '../../components/emailList/MailList'
import Featured from '../../components/featured/Featured'
import FeaturedPropterties from '../../components/featuredProperties/FeaturedPropterties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import PropertyList from '../../components/propertyList/PropertyList'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedPropterties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home