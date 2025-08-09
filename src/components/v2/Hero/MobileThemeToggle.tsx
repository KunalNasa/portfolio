import NewThemeToggle from "../NewThemeToggle"
export default function MobileThemeToggle() {
    return (
        <div className="md:hidden flex max-w-10 flex-col" >
            <NewThemeToggle />
        </div>
    );
}
