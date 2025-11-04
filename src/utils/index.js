import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

/**
 * Extracts transaction hash from various URL formats or returns the input if it's already a hash
 * Supports URLs from popular Sui explorers and direct transaction hashes
 */
export function extractTransactionHash(input) {
  if (!input || typeof input !== 'string') {
    return input;
  }

  const trimmed = input.trim();

  // If it's already a transaction hash (64 character hex string), return as-is
  if (/^[a-fA-F0-9]{64}$/.test(trimmed)) {
    return trimmed;
  }

  // URL patterns for different explorers
  const urlPatterns = [
    /https?:\/\/(?:www\.)?suiscan\.xyz\/(?:mainnet|testnet|devnet)\/tx\/([a-fA-F0-9]{64})/i,
    /https?:\/\/(?:www\.)?suiexplorer\.com\/tx\/([a-fA-F0-9]{64})/i,
    /\/tx\/([a-fA-F0-9]{64})/i,
    /([a-fA-F0-9]{64})(?:[/?#]|$)/i
  ];

  for (const pattern of urlPatterns) {
    const match = trimmed.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  // If no pattern matches, return the original input (could be a hash or invalid)
  return trimmed;
}
