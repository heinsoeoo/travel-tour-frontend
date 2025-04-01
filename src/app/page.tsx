import TrustedCompanies from "@/components/trustedCompanies";
import Header from "./layouts/header"
import PopularTodo from "@/components/popularTodo";
import FeaturedTrip from "@/components/featuredTrip";
import PromotionBanner from "@/components/promotionBanner";
import TrendingDestinations from "@/components/trendingDestinations";
import Footer from "./layouts/footer";
import SubscribeMail from "@/components/subscribeMail";
import TravelArticles from "@/components/travelArticles";
import Reviews from "@/components/reviews";

export default function Home() {

    return (
      <div className="w-screen">
        
        <Header />
        <div className="my-[20px]">

          <div className="mx-[250px]">

            {/* Trusted companies */}
            <TrustedCompanies />

            {/* Popular things to do */}
            <PopularTodo />

            {/* Featured Trips */}
            <FeaturedTrip />

          </div>

          {/* Promotion Banner */}
          <PromotionBanner />

          <div className="mx-[250px]">

            {/* Trending destinations */}
            <TrendingDestinations />

          </div>

          {/* Reviews */}
          <Reviews />


          <div className="mx-[250px]">

            {/* Articles */}
            <TravelArticles />

          </div>

          {/* Subscribe */}
          <SubscribeMail />

          {/* Footer */}
          <Footer />

        </div>
      </div>
    );
}