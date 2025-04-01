import TrustedCompanies from "@/components/trustedCompanies";
import Header from "./layouts/header"
import PopularTodo from "@/components/popularTodo";
import FeaturedTrip from "@/components/featuredTrip";
import PromotionBanner from "@/components/promotionBanner";
import TrendingDestinations from "@/components/trendingDestinations";
import Footer from "./layouts/footer";

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


          <div className="mx-[250px]">

            {/* Articles */}

          </div>

          {/* Subscribe */}

          {/* Footer */}
          <Footer />

        </div>
      </div>
    );
}