import './Loader.scss'

export interface LoaderProps {
	styleLoader?: string
}

export const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
	return <div className={`loader ${props.styleLoader}`}></div>
}

export default Loader;