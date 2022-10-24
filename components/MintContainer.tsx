import { useAddress, useClaimNFT, useContract } from '@thirdweb-dev/react';
import React from 'react';
import { CHARACTER_ADDRESS } from '../const/contractAddress';
import styles from '../styles/Home.module.css';
import minerGif from '../mine.gif';
import Image from 'next/image';
import styled from 'styled-components';

const ImageGif = styled(Image)``;
export default function MintContainer() {
	const editionDrop = useContract(CHARACTER_ADDRESS).contract;
	const { mutate: claim, isLoading } = useClaimNFT(editionDrop);
	const address = useAddress();

	return (
		<div className={styles.collectionContainer}>
			<h1>Edition Drop</h1>

			<p>Claim your Character NFT to start playing!</p>

			<div className={`${styles.nftBox} ${styles.spacerBottom}`}>
				<Image
					src={minerGif}
					style={{ height: '10rem', width: '10rem', position: 'relative' }}
					alt=""
				/>
			</div>

			<button
				className={`${styles.mainButton} ${styles.spacerBottom}`}
				onClick={() =>
					claim({
						quantity: 1,
						to: address as string,
						tokenId: 0,
					})
				}
			>
				{isLoading ? 'Loading...' : 'Claim'}
			</button>
		</div>
	);
}
