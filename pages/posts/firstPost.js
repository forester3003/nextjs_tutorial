import Link from "next/Link";

export default function FirstPost() {
    return (
        <div>
            <h1>最初の投稿</h1>
            <Link href="/posts/firstPost">戻る</Link>
        </div>
    );
}