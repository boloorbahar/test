const Privacy = () => {
  return (
    <div className="rounded-3xl p-6 bg-[#1A1E28] border border-[#58545f] text-white mx-5">
      <span className="font-bold text-xl leading-6">Privacy Policy</span>
      <p className="my-10 font-normal text-[16px] leading-5 text-justify">
        At Sats Fund, we value your privacy as much as your sats. This Privacy
        Policy outlines how we handle your data while you enjoy our Mini App.
      </p>
      <p className="my-10 font-normal text-[16px] leading-5 text-justify">
        What We Collect: We may collect basic data like your Telegram ID, wallet
        info (if connected), and in-app activity (e.g., fund selections or taps)
        to ensure smooth gameplay and reward tracking. No unnecessary snooping
        here!
      </p>
      <p className="my-10 font-normal text-[16px] leading-5 text-justify">
        How We Use It: Your data helps us run Sats Fund, process rewards, and
        improve your experience. We might anonymize it for stats—like how many
        players love the Meme Fund—but that’s it.
      </p>
      <p className="my-10 font-normal text-[16px] leading-5 text-justify">
        Sharing: We don’t sell your info. Data may be shared with Telegram or
        blockchain partners (e.g., TON) only to make the app work or comply with
        legal rules.
      </p>
    </div>
  );
};
export default Privacy;
